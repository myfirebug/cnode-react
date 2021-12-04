import axios from "axios";
import serviceConfig from "./config";
import Qs from "qs";
import { IDefaultConfig } from "@src/types";

export interface IResult {
  code?: string,
  data?: any,
  msg?: string,
  success?: boolean,
  [propNames: string]: any
}

const baseUrl = process.env.REACT_APP_ENV;

const getService = (serviceUrl: string): void => {
  if (baseUrl && typeof baseUrl === "string") {
    axios.defaults.baseURL = serviceConfig[baseUrl][serviceUrl];
  }
};

// 正在进行中的请求列表
const requestList: string[] = [];
// 需要loading次数
let loadingArray = 0;

/**
 * 阻止重复请求
 * @param url -当前请求url地址
 * @param cancel -请求中断函数
 */
const stopRepeatRequest = function (
  url: string,
  cancel: (url?: string) => void
): void {
  // const errorMsg = errorMessage || ''
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      cancel(url);
      return;
    }
  }
  requestList.push(url);
};

/**
 * 允许某个请求可以继续进行
 * @param url -请求url地址
 */
const allowRequest = function (url: string): void {
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      requestList.splice(i, 1);
      break;
    }
  }
};

/**
 * 获取config
 * @param config
 * @returns {*}
 */
const getConfig = function (config: IDefaultConfig) {
  return {
    url: config.url || "", // 接口地址
    params: config.params, // 接口参数
    loading: typeof config.loading === "boolean" ? config.loading : true, // 加载过程中是否显示loading
    servicePrefix: config.servicePrefix || "", // 接口前缀（这里主要是在该项目对应多人开发时使用）
    data: config.data || {}, // 请求主体被发送的数据
  };
};

/**
 * 显示loading
 * @param status
 */
const showLoading = function (status: boolean) {
  if (status) {
    loadingArray++;
    const loadingDom = document.getElementById("js_loading");
    if (status && loadingDom) {
      loadingDom.style.display = "fixed";
    }
  }
};

/**
 * 隐藏loading
 * @param status
 */
const hideLoading = function (status: boolean) {
  const loadingDom = document.getElementById("js_loading");
  if (status) {
    loadingArray--;
  }
  if (loadingArray <= 0 && loadingDom) {
    loadingDom.style.display = "none";
  }
};

// 请求超时
axios.defaults.timeout = 60000;
// post 请求头的设置
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let cancel: any;
    if (typeof config.headers === "object") {
      config.headers.Authorization = `bearer ${window.sessionStorage.getItem(
        "token"
      )}`;
    }

    // 设置cancelToken对象
    config.cancelToken = new axios.CancelToken(function executor(c) {
      cancel = c;
    });
    if (typeof cancel === "function") {
      stopRepeatRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`,
        cancel
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const config = response.config;
    allowRequest(
      `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
    );
    const status = response.status;
    switch (status) {
      case 200:
        const code = response.data.code;
        switch (code) {
          // 发送成功
          case 0:
            return Promise.resolve(response.data);
          default:
            return Promise.resolve(response.data);
        }
      default:
        return Promise.reject(response);
    }
  },
  (error) => {
    if (error.config) {
      allowRequest(
        `${error.config.url}?${Qs.stringify(error.config.params)}&method=${
          error.config.method
        }`
      );
    }
    if (error.message) {
      allowRequest(`${error.message}`);
    }
    let response = error.response;
    if (!response) {
      // message.error('服务器错误');
      return Promise.resolve(error);
    }
    let code = response.status;
    if (code) {
      switch (code) {
        case 401:
          if (response.data && response.data.message) {
          }
          break;
        // token过期
        case 403:
          // 跨域清空父级的token，跳到登录页面
          window.parent.postMessage(
            {
              type: "token",
              url: window.location.href,
            },
            "*"
          );
          break;
        // 404请求不存在
        case 404:
          break;
        case 500:
          break;
        default:
          break;
      }
    }
    return Promise.reject(response.data);
  }
);
/**
 * get请求
 * @param url-接口地址
 * @param config-接口参数
 */
export function get(config: IDefaultConfig) {
  // 获取合并后的config
  const conf = getConfig(config);
  showLoading(conf.loading);
  if (conf.servicePrefix) {
    getService(conf.servicePrefix);
  }
  return new Promise(
    (
      resolve: (data: IResult) => void,
      reject: (data: IResult) => void
    ) => {
      axios
        .get(conf.url, {
          params: conf.params,
        })
        .then((res) => {
          hideLoading(conf.loading);
          resolve(res);
        })
        .catch((err) => {
          hideLoading(conf.loading);
          reject(err);
        });
    }
  );
}

/**
 * post方法
 * @param config [请求的url地址]
 * @returns {Promise<any>}
 */
export function post(config: IDefaultConfig) {
  // 获取合并后的config
  const conf = getConfig(config);
  showLoading(conf.loading);
  if (conf.servicePrefix) {
    getService(conf.servicePrefix);
  }
  return new Promise(
    (
      resolve: (data: IResult) => void,
      reject: (data: IResult) => void
    ) => {
      axios
        .post(conf.url, Qs.stringify(conf.params), conf.data)
        .then((res) => {
          hideLoading(conf.loading);
          resolve(res);
        })
        .catch((err) => {
          hideLoading(conf.loading);
          reject(err);
        });
    }
  );
}
