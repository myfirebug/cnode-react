// counter state数据类型
export type COUNTER_STATE = number;
// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT";
export type INCREMENT_TYPE = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";
export type DECREMENT_TYPE = typeof DECREMENT;

// userInfo类型
export interface USERINFO_STATE {
  avatar_url: string;
  id: string;
  loginname: string;
  token: string;
}

// loginout
export const LOGIN_OUT = "LOGIN_OUT";
// 定义loginout类型常量
export type LOGIN_OUT_TYPE = typeof LOGIN_OUT;

// userInfo
export const USERINFO = "USERINFO";
// 定义userInfo类型常量
export type USERINFO_TYPE = typeof USERINFO;

// theme类型
export interface THEME_STATE {
  name: string;
  value: string;
}
// theme
export const THEME = "THEME";
// 定义theme类型常量
export type THEME_TYPE = typeof THEME;
// 清除theme
export const CLEAR_THEME ="CLEAR_THEME"
// 定义清除theme类型常量
export type CLEAR_THEME_TYPE = typeof CLEAR_THEME;

// 所有的数据的数据类型, 注意这里每加一个state模块都必须在这里进行申明
export type ALL_STATE = {
  counter: COUNTER_STATE;
  userInfo: USERINFO_STATE;
  theme: THEME_STATE;
};
