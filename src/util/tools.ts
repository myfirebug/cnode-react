import { IAnyObject } from "@src/types";

/**
 * 获取参数值
 * @param name
 * @param url
 * @returns {any}
 */
export function getUrl(name: string, url?: string): string {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let result =
    (url || window.location.href).split("?").length > 1 &&
    (url || window.location.href).split("?")[1].match(reg);
  return result ? decodeURIComponent(result[2]) : "";
}

/**
 * 修改url参数
 * @param paramName
 * @param replaceWith
 * @param url
 * @returns {string}
 */
export function replaceParamVal(
  paramName: string,
  replaceWith: string,
  url: string
): string {
  let oUrl = url || window.location.href;
  // eslint-disable-next-line no-eval
  let re = eval("/(" + paramName + "=)([^&]*)/gi");
  let nUrl = oUrl.replace(re, paramName + "=" + replaceWith);
  return nUrl;
}

/**
 *格式化日期
 * @param dateString
 * @param fmt
 * @returns {*}
 */
export function fmtDate(dateString: string, fmt: string): string {
  const date = new Date(dateString);
  const o: IAnyObject = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

/**
 * 判断一个对象是否是纯对象
 * @param obj
 * @returns {boolean}
 */
export function isPlainObject(obj: IAnyObject): boolean {
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  try {
    if (obj.constructor && !typeof obj.constructor.prototype.isPrototypeOf) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}
/**
 * 判断是否是数组
 * @param arr
 * @returns {boolean}
 */
export function isArray(arr: any[]) {
  if (!arr || toString.call(arr) !== "[object Array]") {
    return false;
  }
  return true;
}

/**
 * 生成唯一ID
 * @returns {string}
 */
export function guid(): string {
  const s: any[] = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "=";

  const uuid = s.join("");
  return uuid;
}

/**
 * 通过id找到数组，并在该数据下的children里push一条obj数据
 * 注意这里会修改原数组哈，请自行拷贝一份原数据出来，可通过JSON.parse(JSON.stringify(datas))
 * @param datas
 * @param id
 * @param obj
 * @returns {*}
 */
export function insertObjectById(
  datas: any[],
  id: number | string,
  obj: IAnyObject
): any[] {
  if (!datas) {
    return [];
  }
  if (id) {
    for (let i = 0; i < datas.length; i++) {
      if (id === datas[i].id) {
        datas[i].children.push(obj);
      } else if (datas[i].children && datas[i].children.length) {
        insertObjectById(datas[i].children, id, obj);
      }
    }
  } else {
    datas.push(obj);
  }
  return datas;
}

/**
 * 修改最后一级诉children修改为undefind
 * @param datas
 */
export function getTreeData(datas: any[]): any[] {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].children.length < 1) {
      datas[i].children = undefined;
    } else {
      getTreeData(datas[i].children);
    }
  }
  return datas;
}

/**
 * 根据当前节点id返回当前节点数据
 * @param datas 数据
 * @param value 字段值
 * @param field 字段名
 */
export function getGroupById(
  datas: any[],
  value: number | string,
  field: string
): any[] {
  let result = null;
  if (!datas) {
    return [];
  }
  for (let i = 0; i < datas.length; i++) {
    if (datas[i][field] === value) {
      result = datas[i];
      break;
    } else if (datas[i].children && datas[i].children.length) {
      result = getGroupById(datas[i].children, value, field);
    }
  }
  return result;
}

/**
 * 根据id返回所有的父级
 * @param data
 * @param id
 */
export function getParentsById(data: any[], id: number | string): any {
  for (const i in data) {
    if (data[i].children) {
      let ro = getParentsById(
        data[i].privileges.length >= 1 ? data[i].privileges : data[i].children,
        id
      );
      if (ro !== undefined) {
        return ro.concat({
          path: data[i].mappingUrl ? data[i].path : "",
          name: data[i].name,
        });
      }
    }
    // 匹配的最后一级没有必要使用path了
    if (data[i].path === id) {
      return [
        {
          path: "",
          name: data[i].name,
        },
      ];
    }
  }
}

/**
 * 深拷贝
 * @param data
 * @returns {*}
 */
export function deepClone(data: any) {
  if (typeof data !== "object" || data == null) {
    return data;
  }
  let result: any;
  if (data instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let field in data) {
    if (data.hasOwnProperty(field)) {
      result[field] = data[field];
      deepClone(data[field]);
    }
  }
  return result;
}

/**
 * 锁定body
 * @param bodyClass
 * @returns {{afterOpen: afterOpen, beforeClose: beforeClose}}
 */
export const lockMaskScroll = ((bodyClass) => {
  let scrollTop: number = 0;
  return {
    afterOpen: function () {
      scrollTop =
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        document.body.scrollTop;
      document.body.classList.add(bodyClass);
      document.body.style.top = -scrollTop + "px";
    },
    beforeClose: function () {
      if (document.body.classList.contains(bodyClass)) {
        document.body.classList.remove(bodyClass);
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = scrollTop;
        }
      }
    },
  };
})("fixed");

/**
 * 转换时间
 * @param str
 * @returns
 */
export const timeAgo = function (str: string): string {
  if (!str) return "";
  var date = new Date(str);
  var time = new Date().getTime() - date.getTime();
  if (time < 0) {
    return "";
  } else if (time / 1000 < 30) {
    return "刚刚";
  } else if (time / 1000 < 60) {
    return parseInt(time / 1000 + "") + "秒前";
  } else if (time / 60000 < 60) {
    return parseInt(time / 60000 + "") + "分钟前";
  } else if (time / 3600000 < 24) {
    return parseInt(time / 3600000 + "") + "小时前";
  } else if (time / 86400000 < 31) {
    return parseInt(time / 86400000 + "") + "天前";
  } else if (time / 2592000000 < 12) {
    return parseInt(time / 2592000000 + "") + "月前";
  } else {
    return parseInt(time / 31536000000 + "") + "年前";
  }
};

/**
 * 防抖
 * @param func 方法
 * @param wait 等待时间
 * @returns
 */
export function debounce(func: Function, wait = 0) {
  let timid: any = null;
  let result: Function;

  return function (this: any) {
    let context = this;
    let args = arguments;

    if (timid) {
      clearTimeout(timid);
    }
    timid = setTimeout(() => {
      result = func.apply(context, args);
    }, wait);

    return result;
  };
}

/**
 * 节流
 * @param func
 * @param delay
 * @returns
 */
export function throttle(func: Function, delay: number) {
  let prev = Date.now();
  debugger;
  return function (this: Function) {
    const context = this;
    const args = arguments;
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}

/**
 * [获取滚动条当前的位置]
 * @return {[Number]} [scrollTop]
 */
export function getScrollTop():number {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

/**
 * [获取当前可视范围的高度]
 * @return {[Number]} [clientHeight]
 */
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  } else {
    clientHeight = Math.max(
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }
  return clientHeight;
}

/**
 * [获取当前可视范围的高度]
 * @return {[Number]} [clientHeight]
 */
export function getScrollHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}
