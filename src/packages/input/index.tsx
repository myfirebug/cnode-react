import React, {
  InputHTMLAttributes,
  useState,
  ChangeEvent
} from "react";
import classNames from "classnames";
import "./style/index.scss";

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "large" | "middle" | "small" | "mini";
  clear?: boolean;
  defaultValue?: string | number;
  onChange?:(e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = ({
  size,
  className,
  defaultValue,
  clear,
  onChange,
  ...reset
}) => {
  const [value, setValue] = useState(() => {
    if (typeof defaultValue === "undefined") {
      return "";
    }
    return defaultValue;
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    typeof onChange === 'function' && onChange(e)
  };

  const classes = classNames("sz-input", className, {
    [`sz-input__${size}`]: size,
  });
  return (
    <div className={classes}>
      <input
        value={value}
        {...reset}
        onChange={changeHandler}
      />
      {value && clear && (
        <span onClick={() => setValue("")} className="clear">
          ╳
        </span>
      )}
    </div>
  );
};

Input.defaultProps = {
  size: "middle",
};

export default Input;
