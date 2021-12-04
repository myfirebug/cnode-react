import { ModifyUserAction } from "../actions/userInfo";
import { USERINFO, USERINFO_STATE, LOGIN_OUT } from "../type";

// 处理并返回 state
const initialValue: USERINFO_STATE = {
  avatar_url: "",
  id: "",
  loginname: "",
  token: "",
}


export const userInfo = (
  state = initialValue,
  action: ModifyUserAction
): USERINFO_STATE => {
  switch (action.type) {
    case USERINFO:
      return {
        ...action.data
      }
    case LOGIN_OUT:
      return {
        ...initialValue
      }
    default:
      return state;
  }
};
