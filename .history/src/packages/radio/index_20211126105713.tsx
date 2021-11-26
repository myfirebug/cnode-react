import React, { FC, ReactElement, InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface IRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultChecked"> {
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  name?: string;
  children?: ReactElement | string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<IRadioProps> = ({
  defaultChecked,
  disabled,
  value,
  name,
  children,
  onChange,
}) => {
  const classes = classNames("sz-radio__wrapper", {
    [`is-disabled`]: disabled,
  });

  const [radioValue, setRadioValue] = useState(defaultChecked || false)

  // 数值改变时
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setRadioValue(!radioValue)
    }
    typeof onChange === "function" && onChange(e);
  }

  return (
    <label className={classes}>
      <span className="sz-radio">
        <input
          name={name}
          value={value}
          className="sz-radio__input"
          onChange={changeHandler}
          type="radio"
          disabled={disabled}
          checked={radioValue}
        />
        <span className="sz-radio__core"></span>
      </span>
      <span className="sz-radio__text">{children}</span>
    </label>
  );
};

export default Radio;
