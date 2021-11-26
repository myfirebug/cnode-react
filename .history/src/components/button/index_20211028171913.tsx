import React from "react";

const enum ButtonSize {
  large = "large",
  middle = "middle",
  small = "small",
  mini = "mini",
}

const enum ButtonType {
  
}

interface IButton {
  size: ButtonType;
}

const Button: React.FC<IButton> = (props) => {
  return <button>123</button>;
};

Button.defaultProps = {
  size: "middle",
};

export default Button;
