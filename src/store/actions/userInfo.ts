import { USERINFO_TYPE, USERINFO, USERINFO_STATE, LOGIN_OUT, LOGIN_OUT_TYPE, CLEAR_THEME } from "../type";
import { Dispatch } from "redux";
import Ajax from "@src/service";
// 用户信息的接口类型
export interface IUserInfoAction {
  type: USERINFO_TYPE;
  data: USERINFO_STATE;
}

// 退出信息的接口类型
export interface ILoginOutAction {
  type: LOGIN_OUT_TYPE;
}

// 定义 ModifyUserAction 类型，包含 IUserInfoAction 和 ILoginOutAction接口类型
export type ModifyUserAction = IUserInfoAction | ILoginOutAction;

// 用户信息
const actionUserInfo = (data: USERINFO_STATE): IUserInfoAction => ({
  type: USERINFO,
  data,
});

// 退出
const actionLoginOut = ():ILoginOutAction => ({
  type: LOGIN_OUT
})

// 用户信息
export const getUserInfo = (token: string) => (dispatch: Dispatch) => {
  Ajax.accessToken({
    accesstoken: token,
  }).then((res) => {
    if (res.success) {
      dispatch(
        actionUserInfo({
          id: res.id,
          avatar_url: res.avatar_url,
          loginname: res.loginname,
          token: token,
        })
      );
    }
  });
};
// 退出
export const loginOut = () =>(dispatch: Dispatch) => {
  dispatch(actionLoginOut())
  dispatch({
    type: CLEAR_THEME
  })
}
