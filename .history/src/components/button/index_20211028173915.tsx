import React, { ReactNode } from "react";

const enum ButtonSize {
  large,
  middle,
  small,
  mini,
}

const enum ButtonType {
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
  type?: ButtonType;
  disabled?: boolean;
  classname?: string;
  children: ReactNode
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Button: React.FC<IButton & ButtonHTMLAttributes & AnchorHTMLAttributes> = ({
  size,
  type,
  disabled,
  classname,
  ...reset
}) => {
  console.log(reset)
  return <button>{children}</button>;
};
export default Button;
