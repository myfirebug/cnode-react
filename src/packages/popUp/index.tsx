import React, { FC, useEffect, ReactElement } from "react";
import { CSSTransition } from "react-transition-group";
import { lockMaskScroll } from "@util/tools";
import classNames from "classnames";
import './style/index.scss'


export interface IPopUpProps {
  visible?: boolean;
  onCancel?: () => void;
  dir?: "top" | "bottom" | "left" | "right" |  "center";
  round?: boolean;
  children?: ReactElement;
  classname?: string;
  header?: ReactElement;
}
const PopUp: FC<IPopUpProps> = ({
  visible,
  onCancel,
  dir,
  round,
  classname,
  children,
  header,
}) => {
  // 根据show来判断是否需要锁定body,如果不锁定body有肯定条有下载加载会请求接口
  useEffect(() => {
    if (visible) {
      lockMaskScroll["afterOpen"]();
    } else {
      lockMaskScroll["beforeClose"]();
    }
  }, [visible]);
  // 取消
  const cancelHander = () => {
    typeof onCancel === "function" && onCancel();
  };

  const classes = classNames("sz-popup", classname, {
    [`is-round`]: round,
    [`is-${dir}`]: dir,
  });
  return (
    <>
      <CSSTransition timeout={500} in={visible} unmountOnExit classNames="fade">
        <div onClick={cancelHander} className="sz-popup__mask"></div>
      </CSSTransition>
      <CSSTransition
        timeout={500}
        in={visible}
        unmountOnExit
        classNames={`translate-${dir}`}
      >
        <div className={classes}>
          {
            header &&
            <div className="sz-popup__header">{header}</div>
          }
          <div className="sz-popup__body">{children}</div>
        </div>
      </CSSTransition>
    </>
  );
};

PopUp.defaultProps = {
  visible: false,
  round: false,
  dir: 'top'
};

export default PopUp;
