import React, { ReactNode } from "react";
import classNames from "classnames";

export enum ButtonSize {
  large = "large",
  middle = "middle",
  small = "small",
  mini = "mini",
}

export enum ButtonType {
  primary = "primary",
  ghost = "ghost",
  dashed = "dashed",
  link = "link",
  text = "text",
  default = "default",
  danger = "danger",
}

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

const Button: React.FC<IButton & ButtonHTMLAttributes & AnchorHTMLAttributes> =
  ({ size, btnType, disabled, classname, children, href, ...reset }) => {
    const classes = classNames("sz-btn", {
      [`sz-button__${btnType}`]: btnType,
      [`is-${size}`]: size,
      'disabled': btnType === ButtonType.link && disabled,
    });

    if (btnType === ButtonType.link && href) {
      return (
        <a
          className={classes}
          href={href}>
          {children}
        </a>
      );
    } else {
      return (
        <button
          className={classes}
          disabled={disabled}
        >
          {children}
        </button>
      )
    }
  };
Button.defaultProps = {
  disabled: false
}
export default Button;
