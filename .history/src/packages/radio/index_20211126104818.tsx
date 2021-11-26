import React, { FC, ReactElement, InputHTMLAttributes } from "react";
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

  return (
    <label className={classes}>
      <span className="sz-radio">
        <input
          name={name}
          value={value}
          className="sz-radio__input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            typeof onChange === "function" && onChange(e);
          }}
          type="radio"
          disabled={disabled}
          checked={checked}
        />
        <span className="sz-radio__core"></span>
      </span>
      <span className="sz-radio__text">{children}</span>
    </label>
  );
};

export default Radio;
