import React, { ReactNode } from "react";
import classNames from "classnames";

enum ButtonSize {
  large = "large",
  middle = "middle",
  small = "small",
  mini = "mini",
}

enum ButtonType {
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
  BtnType?: ButtonType;
  disabled?: boolean;
  classname?: string;
  children?: ReactNode;
  href?: string;
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<IButton & ButtonHTMLAttributes & AnchorHTMLAttributes> =
  ({ size, BtnType, disabled, classname, children, href, ...reset }) => {
    const classes = classNames("sz-btn", {
      [`is-${BtnType}`]: BtnType,
      [`is-${size}`]: size,
      'disabled': BtnType === ButtonType.link && disabled,
    });

    if (BtnType === ButtonType.link && href) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }
    return <button>{children}</button>;
  };

export default Button;
