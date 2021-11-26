import React, { ReactNode } from "react";
import classNames from "classnames";

interface IInput {
  after?: ReactNode;
  before?: ReactNode;
}

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputHTMLAttributes & IInput> = ({
  after,
  before,
  className,
  ...reset
}) => {
  const classes = classNames("sz-input", className);
  return (
    <div className="ds-input__wrapper">
        {
            after ? <div className="ds-input__after">
                {after}
            </div> : null 
        }
      <input className={classes} {...reset} />
      {
            before ? <div className="ds-input__before">
                {before}
            </div> : null 
        }
    </div>
  );
};

export default Input;
