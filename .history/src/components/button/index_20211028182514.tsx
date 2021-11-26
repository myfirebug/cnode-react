import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonSize = "large" | "middle" | "small" | "mini";

type ButtonType =
  | "primary"
  | "ghost"
  | "dashed"
  | "link"
  | "text"
  | "default"
  | "danger";

interface IButton {
  size?: ButtonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  classname?: string;
  children?: ReactNode;
  href?: string;
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonHTMLAttributes & AnchorHTMLAttributes & IButton> =
  ({ size, btnType, disabled, classname, children, href, ...reset }) => {
    const classes = classNames("sz-btn", {
      [`sz-btn__${btnType}`]: btnType,
      [`is-${size}`]: size,
      "is-disabled": btnType === "link" && disabled,
    });

    if (btnType === "link" && href) {
      return (
        <a className={classes} href={href} {...reset}>
          {children}
        </a>
      );
    } else {
      return (
        <button className={classes} disabled={disabled} {...reset}>
          {children}
        </button>
      );
    }
  };
Button.defaultProps = {
  disabled: false,
};
export default Button;
