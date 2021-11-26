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
    alert(size)
  const classes = classNames("sz-input", className);
  return (
    <div className="sz-input__wrapper">
      {after ? <div className="sz-input__after">{after}</div> : null}
      <input className={classes} {...reset} />
      {before ? <div className="sz-input__before">{before}</div> : null}
    </div>
  );
};

export default Input;
