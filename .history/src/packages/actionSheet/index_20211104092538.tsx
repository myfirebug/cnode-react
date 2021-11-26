import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import PopUp from "../popUp";
import Toast from "../toast";
import "./style/index.scss";

interface IDatasItem {
  name?: string;
  value?: string | number;
  disabled?: boolean;
  description?: string;
}

interface IActionSheetProps {
  visible?: boolean;
  onCancel?: () => void;
  onOk?: (e: IDatasItem) => void;
  children?: ReactElement;
  title?: string;
  datas: IDatasItem[];
  cancelText?: string;
}

const ActionSheet: FC<IActionSheetProps> = ({
  visible,
  onCancel,
  onOk,
  title,
  datas,
  cancelText,
}) => {
  // 处理单击项事件
  const oKHandler = (item: IDatasItem) => {
    if (!item.disabled) {
      typeof onOk === "function" && onOk(item);
      typeof onCancel === "function" && onCancel();
    } else {
      Toast({
        type: "warning",
        content: "该选项已禁用",
      });
    }
  };

  return (
    <PopUp visible={visible} onCancel={onCancel} dir="top" round>
      <div className="sz-actionsheet">
        {title && <div className="sz-actionsheet__header">{title}</div>}
        <div className="sz-actionsheet__body">
          {datas.map((item) => (
            <div
              key={item.value}
              className={classNames("sz-actionsheet__item", {
                [`is-disabled`]: item.disabled,
              })}
              onClick={() => oKHandler(item)}
            >
              <div className="name">{item.name}</div>
              {item.description && (
                <p className="description">{item.description}</p>
              )}
            </div>
          ))}
        </div>
        {cancelText && (
          <div
            className="sz-actionsheet__footer"
            onClick={() => typeof onCancel === "function" && onCancel()}
          >
            {cancelText}
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default ActionSheet;
