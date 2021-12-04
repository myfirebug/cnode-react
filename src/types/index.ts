// 任意类型的object
export interface IAnyObject {
  [propName: string]: any;
}

export interface ITopic {
  id: string;
  last_reply_at: string;
  title: string;
  create_at?: string;
  reply_count?: number;
  tab?: "share" | "ask" | "job";
  top?: boolean;
  visit_count?: number;
  content?: string;
  author:{
    avatar_url: string;
    loginname: string;
  },
  [propNames: string]: any;
}

// 默认接口请求
export interface IDefaultConfig {
  url: string;
  params?: {
    [propName: string]: any;
  };
  loading?: boolean;
  servicePrefix: string;
  data?: {
    [propName: string]: any;
  };
}
