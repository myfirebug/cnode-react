import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

interface IButton {
  size?: "large" | "middle" | "small" | "mini";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  className?: string;
  children?: ReactNode
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLAttributes & IButton> =
  ({ size, color, disabled, className, children, ...reset }) => {
    const classes = classNames("sz-btn", className, {
      [`sz-btn__${color}`]: color,
      [`is-${size}`]: size
    });

    return (
      <button className={classes} disabled={disabled} {...reset}>
        {children}
      </button>
    );
  };
Button.defaultProps = {
  disabled: false,
};
export default Button;