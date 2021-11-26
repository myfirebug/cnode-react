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
}

interface IButton {
  size?: ButtonSize;
  type?: ButtonType;
}

const Button: React.FC<IButton> = ({ size, type }) => {
  return <button>123</button>;
};

Button.defaultProps = {
  size: "middle",
  type: "default",
};

export default Button;
