import React, { FC, ReactElement, InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import "./style/index.scss";

export type RadioValue = string | number

export interface IRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultChecked"> {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  children?: ReactElement | string | number;
}


const Radio: FC<IRadioProps> = ({
  defaultChecked = false,
  disabled,
  value,
  children,
}) => {
  const classes = classNames("sz-radio__wrapper", {
    [`is-disabled`]: disabled,
  });

  const [radioValue, setVadioValue] = useState

  return (
    <label className={classes}>
      <span className="sz-radio">
        <input
          value={value}
          className="sz-radio__input"
          type="radio"
          disabled={disabled}
        />
        <span className="sz-radio__core"></span>
      </span>
      <span className="sz-radio__text">{children}</span>
    </label>
  );
};

export default Radio;
