import { combineReducers } from "redux";
import { counter } from "./counter";
import { userInfo } from "./userInfo";
import { theme } from "./theme";

export default combineReducers({
  counter,
  userInfo,
  theme,
});
