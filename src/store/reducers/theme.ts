import { IThemeAction } from "../actions/theme";
import { THEME, THEME_STATE, CLEAR_THEME, CLEAR_THEME_TYPE } from "../type";

// 处理并返回 state

const initialValue: THEME_STATE = {
  name: "默认",
  value: "default",
};

export const theme = (
  state = initialValue,
  action: IThemeAction | { type: CLEAR_THEME_TYPE }
): THEME_STATE => {
  switch (action.type) {
    case THEME:
      return {
        ...action.data,
      };
    case CLEAR_THEME:
      return {
        ...initialValue,
      };
    default:
      return state;
  }
};
