import React from "react";

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
  classname?: string
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
  return <button>123</button>;
};

Button.defaultProps = {
  size: "middle",
  type: "default",
};

export default Button;
