import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

export enum InputSizeType {
  large = "large",
  middle = "middle",
  small = "small",
}

interface IInput {
  after?: ReactNode;
  before?: ReactNode;
  size?: InputSizeType;
  isRadius?: boolean;
}

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputHTMLAttributes & IInput> = ({
  size,
  after,
  before,
  className,
  isRadius,
  ...reset
}) => {
  const inputWrapperClasses = classNames("sz-input__wrapper", {
    [`sz-input__${size}`]: size,
    [`is-radius`]: isRadius,
  });
  const inputClasses = classNames("sz-input", className);
  return (
    <div className={inputWrapperClasses}>
      {after ? <div className="sz-input__after">{after}</div> : null}
      <input className={inputClasses} {...reset} />
      {before ? <div className="sz-input__before">{before}</div> : null}
    </div>
  );
};

// @ts-ignore
Input.defaultProps = {
  isRadius: false,
  size: InputSizeType.middle,
};

export default Input;
