import { ModifyAction } from "../actions/counter";
import { DECREMENT, INCREMENT, COUNTER_STATE } from "../type";

// 处理并返回 state

export const counter = (
  state: COUNTER_STATE = 0,
  action: ModifyAction
): number => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
