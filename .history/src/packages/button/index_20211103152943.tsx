import React, { ReactElement, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import "./style/index.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "middle" | "small" | "mini";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  className?: string;
  children?: ReactElement | string;
  block?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  size,
  color,
  disabled,
  className,
  children,
  block,
  ...reset
}) => {
  const classes = classNames("sz-btn", className, {
    [`sz-btn__${color}`]: color,
    [`sz-btn__${size}`]: size,
    [`is-block`]: block
  });

  return (
    <button className={classes} disabled={disabled} {...reset}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "middle",
  color: "default",
  disabled: false,
  block: false
};

export default Button;
