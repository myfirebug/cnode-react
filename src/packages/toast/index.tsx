/*
 * @Author: hejp
 * @Date:   10:17
 * @Last Modified by:   hejp
 * @Last Modified time: 10:17
 */
import React, { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import "./style/index.scss";

let instance: any;

interface IToastProps {
  content?: ReactNode;
  duration?: number;
  type?: "loading" | "html" | "success" | "warning" | "error";
  destroy?: () => void;
}

const ToastComponent: React.FC<IToastProps> = ({
  content,
  duration = 3000,
  destroy,
  type,
}) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible(false);
    }, duration);
    const destroyTimerId = setTimeout(() => {
      typeof destroy === "function" && destroy();
    }, duration + 250);
    return () => {
      clearTimeout(timerId);
      clearTimeout(destroyTimerId);
    };
  }, [duration, destroy]);
  const classes = classNames("sz-toast", visible ? "is-show" : "is-hide", {
    [`sz-toast__${type}`]: type,
  });
  return (
    <div className={classes}>
      <span className="sz-status"></span>
      {content}
    </div>
  );
};

const Toast = (props: IToastProps) => {
  // 销毁组件
  const destroy = () => {
    ReactDOM.unmountComponentAtNode(instance);
    document.body.removeChild(instance);
    instance = null;
  };
  // 周一时间只能出现一次,同在的处理逻辑是如果有则删除，渲染新组件
  if (instance) {
    destroy();
  }

  instance = document.createElement("div");
  document.body.appendChild(instance);

  return ReactDOM.render(
    <ToastComponent
      content={props.content}
      duration={props.duration || 3000}
      type={props.type || "html"}
      destroy={destroy}
    />,
    instance
  );
};

export default Toast;
