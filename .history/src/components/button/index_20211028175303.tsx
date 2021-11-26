import React, { ReactNode } from "react";

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
  console.log(reset)
  return <button>{children}</button>;
};

Button.defaultProps = {
  size: '',
  BtnType: ''
}

export default Button;
