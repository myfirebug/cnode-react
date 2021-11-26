import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

interface IButton {
  size?: "large" | "middle" | "small" | "mini";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  disabled?: boolean;
  classname?: string;
  children?: ReactNode
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLAttributes & IButton> =
  ({ size, color, disabled, classname, children, ...reset }) => {
    const classes = classNames("sz-btn", {
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
