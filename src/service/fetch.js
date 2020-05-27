/*
 * @Author: hejp
 * @Date:   10:39
 * @Last Modified by:   hejp
 * @Last Modified time: 10:39
 */
import axios from 'axios'
import config from './config'
import Qs from 'qs'
const ENV = process.env.NODE_ENV;

const getService = (serviceUrl) => {
    // 环境切换(开发，正式环境)
    if (ENV === 'development') {
        axios.defaults.baseURL = config.development[serviceUrl]
    } else if (ENV === 'production') {
        // production, online
        axios.defaults.baseURL = config.online[serviceUrl]
    }
}
// 请求超时
axios.defaults.timeout = 60000

// post 请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        document.getElementById('js_loading').style.display = 'block';
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        document.getElementById('js_loading').style.display = 'none'
        if (response.status === 200) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        document.getElementById('js_loading').style.display = 'none'
        let response = error.response
        if (!response) {
            return Promise.reject(error)
        }
        let code = response.status
        if (code) {
            switch (code) {
                case 401:
                    break
                // token过期
                case 403:
                    break
                // 404请求不存在
                case 404:
                    break
                case 500:
                    break
                default:
                    break
            }
        }
        return Promise.reject(error)
    }
)

/**
 * get方法
 * @param url [请求的url地址]
 * @param params [请求的参数]
 * @returns {Promise<any>}
 */
export function get (url, params, serviceUrl, header) {
    if (serviceUrl) {
        getService(serviceUrl)
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            header: header
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
/**
 * post方法
 * @param url [请求的url地址]
 * @param params [请求的参数]
 * @returns {Promise<any>}
 */
export function post (url, params, serviceUrl, header, data, qs = true) {
    if (serviceUrl) {
        getService(serviceUrl)
    }
    return new Promise((resolve, reject) => {
        axios.post(url,
            qs ? Qs.stringify(params) : params,
            {
                headers: header ? header : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            },
            data
            ).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
