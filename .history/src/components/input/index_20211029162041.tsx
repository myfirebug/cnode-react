import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

type InputSize = "large" | "middle" | "small";
interface IInput {
  after?: ReactNode;
  before?: ReactNode;
  size?: InputSize;
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
  const inputWrapperClasses = classNames(
    "sz-input__wrapper",
    `sz-input__${size || "middle"}`,
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
  size: 'small'
};

export default Input;
