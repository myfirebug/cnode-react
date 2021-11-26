import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss";

interface IButton {
  size?: "large" | "middle" | "small" | "mini";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  fill?: "solid" | "outline" | "none";
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  block?: boolean;
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLAttributes & IButton> = ({
  size,
  color,
  disabled,
  className,
  children,
  fill,
  block,
  ...reset
}) => {
  const classes = classNames("sz-btn", className, {
    [`sz-btn__${color}`]: color,
    [`sz-btn__${fill}`]: fill,
    [`is-${size}`]: size,
    [`is-${block}`]: block
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
  fill: "solid",
  block: false
};

export default Button;
