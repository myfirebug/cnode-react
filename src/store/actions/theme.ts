import { THEME_TYPE, THEME, THEME_STATE } from "../type";
import { Dispatch } from "redux";
// 增加的接口类型
export interface IThemeAction {
  type: THEME_TYPE;
  data: THEME_STATE;
}

// 用户信息
const actionTheme = (data: THEME_STATE): IThemeAction => ({
  type: THEME,
  data,
});

export const setTheme = (theme: THEME_STATE) => (dispatch: Dispatch) => {
  dispatch(actionTheme(theme));
};
