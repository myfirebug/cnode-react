import React, { ReactNode } from "react";
import classNames from "classnames";
import './index.scss'

type InputSize = 'large' | 'middle' | 'small'
interface IInput {
  after?: ReactNode;
  before?: ReactNode;
  size?: InputSize
}

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputHTMLAttributes & IInput> = ({
  size,
  after,
  before,
  className,
  ...reset
}) => {
    const inputWrapperClasses = classNames('input__wrapper', `sz-input__${size || 'middle'}`)
  const inputClasses = classNames("sz-input", className);
  return (
    <div className={inputWrapperClasses}>
      {after ? <div className="sz-input__after">{after}</div> : null}
      <input className={inputClasses} {...reset} />
      {before ? <div className="sz-input__before">{before}</div> : null}
    </div>
  );
};

export default Input;
