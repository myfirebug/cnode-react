import React, { ReactNode } from "react";

enum ButtonSize {
  large,
  middle,
  small,
  mini,
}

enum ButtonType {
  primary,
  ghost,
  dashed,
  link,
  text,
  default,
  danger,
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