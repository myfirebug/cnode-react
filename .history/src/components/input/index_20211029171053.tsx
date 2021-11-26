import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

const InputSize = "large" | "middle" | "small";
console.log(InputSize)

interface IInput {
  after?: ReactNode;
  before?: ReactNode;
  size?: InputSize;
  isRadius?: boolean;
}

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputHTMLAttributes & IInput> = ({
  size="middle",
  after,
  before,
  className,
  isRadius,
  ...reset
}) => {
  const inputWrapperClasses = classNames(
    "sz-input__wrapper",
    `sz-input__${size}`,
    {
      [`is-radius`]: isRadius,
    }
  );
  const inputClasses = classNames("sz-input", className);
  return (
    <div className={inputWrapperClasses}>
      {after ? <div className="sz-input__after">{after}</div> : null}
      <input className={inputClasses} {...reset} />
      {before ? <div className="sz-input__before">{before}</div> : null}
    </div>
  );
};

Input.defaultProps = {
  isRadius: false,
};

export default Input;
