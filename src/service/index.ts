import { get, post, IResult } from "./fetch";
import { IAnyObject } from "@src/types";

interface IApi {
  [propNames: string]: (params: IAnyObject) => Promise<IResult>
}

const api: IApi = {
  // 验证token是否有效
  accessToken(params) {
    return post({
      url: "accessToken",
      params: params,
      loading: true,
      servicePrefix: "default",
    });
  },
  user(params) {
    return get({
      url: `user/${params.loginname}`,
      loading: true,
      servicePrefix: "default",
    });
  },
  // 列表
  getTopics(params: IAnyObject) {
    return get({
      url: "topics",
      params: params,
      loading: params.LOADING,
      servicePrefix: "default",
    });
  },
  // 详情
  getDetails(params: IAnyObject) {
    return get({
      url: `topic/${params.id}`,
      loading: true,
      servicePrefix: "default",
    });
  },
  // 详情
  getMessages(params: IAnyObject) {
    return get({
      url: "messages",
      params: params,
      loading: true,
      servicePrefix: "default",
    });
  },
};
export default api;
