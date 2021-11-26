import React, { FC, ReactElement, useState, useEffect } from "react";
import { IRadioProps } from "./index";

interface IRadioGroupProps {
  name: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactElement | ReactElement[];
}

const RadioGroupProp: FC<IRadioGroupProps> = ({
  name,
  disabled,
  onChange,
  value,
  children,
}) => {
    // 这里主要是处理不调用onchange时也能的看到效果
  const [radioValue, setRadioValue] = useState(() => {
    if (value === "undefined") {
      return "";
    }
    return value;
  });

  // 这里主要处理异步时填充的value值
  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
    typeof onChange === "function" && onChange(e);
  };

  const renderChildren = () => {
    console.log(React.Children, 'React.ChildrenReact.Children')
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IRadioProps>;
      if (childElement.type.name === "Radio") {
        const params: IRadioProps = {
          name: name,
          defaultChecked: radioValue,
          onChange: changeHandler,
        };
        if (disabled) {
          params.disabled = disabled;
        }

        console.log(child, 'childElementchildElement')

        return React.cloneElement(childElement, params);
      } else {
        console.error(
          "Warning: RadioGroup has a child which is not a Radio component"
        );
      }
    });
  };

  return <div className="sz-radio-group">{renderChildren()}</div>;
};

export default RadioGroupProp;
