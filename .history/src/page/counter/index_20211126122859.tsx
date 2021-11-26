import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ALL_STATE } from "@store/type";
import { decrement, increment } from "@store/actions/counter";
import "./index.scss";
import {Radio, RadioGroup} from '@src/packages'

interface ICounterProps {
  counterValue: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const Counter: React.FC<ICounterProps> = ({
  counterValue,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="sz-counter">
      <div>您点击了{counterValue}次</div>
      <div onClick={onIncrement}>加一</div>
      <div onClick={onDecrement}>减一</div>
      <RadioGroup name="sex">
        <Radio defaultChecked>男</Radio>
        <Radio defaultChecked={false}>女</Radio>
      </RadioGroup>
      <p>单个</p>
      <input type="radio" />
      <input type="radio" checked />
      <input type="radio" disabled value="100" checked />
      <p>多个</p>
      <input type="radio" name="sex" value="nan" />男
      <input type="radio" name="sex" value="nv" />女
      <input type="radio" name="sex" value="wz" />未知
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  counterValue: state.counter,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
