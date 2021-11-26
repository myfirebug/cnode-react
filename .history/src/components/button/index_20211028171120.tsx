import React from "react";

const enum Size {
  big = "big",
  default = "default",
  small = "small",
  mini = "mini",
}

interface IButton {
  size: Size;
}

const Button: React.FC<IButton> = (props) => {
  return <button>123</button>;
};

Button.defaultProps = {
  size: "default",
};

export default Button;
