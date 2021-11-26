import React, { ReactNode } from "react";
import classNames from 'classnames'

enum ButtonSize {
  large="large",
  middle="middle",
  small="small",
  mini="mini",
}

enum ButtonType {
  primary="primary",
  ghost="ghost",
  dashed="dashed",
  link="link",
  text="text",
  default="default",
  danger="danger",
}

interface IButton {
  size?: ButtonSize;
  BtnType?: ButtonType;
  disabled?: boolean;
  classname?: string;
  children?: ReactNode
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Button: React.FC<IButton & ButtonHTMLAttributes & AnchorHTMLAttributes> = ({
  size,
  BtnType,
  disabled,
  classname,
  children,
  ...reset
}) => {
  const classes = classNames('sz-btn', {
    [`is-${BtnType}`]: BtnType,
    [`is-${size}`]: size,
    disabled: BtnType === ButtonType.link && disabled
  })
  return <button>{children}</button>;
};

Button.defaultProps = {
  size: 'primary',
  BtnType: 'middle'
}

export default Button;
