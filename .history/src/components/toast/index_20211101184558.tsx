/*
 * @Author: hejp
 * @Date:   10:17
 * @Last Modified by:   hejp
 * @Last Modified time: 10:17
 */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ReactNode } from "_@types_react@17.0.33@@types/react";
import classNames from "classnames";
import "./index.scss";

const map = {
  loading: "&#xeb01;",
  html: "",
  success: "&#xe61e;",
  warning: "&#xe62f;",
  error: "&#xe622;",
};

let instance: any;

interface IToastProps {
  content?: ReactNode;
  time?: number;
  type?: "loading" | "html" | "success" | "warning" | "error";
  destroy?: () => void;
}

const ToastComponent: React.FC<IToastProps> = ({
  content,
  time = 3000,
  destroy,
  type = "loading",
}) => {
  const [visiable, setVisiable] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiable(false);
    }, time);
    const destroyTimerId = setTimeout(() => {
      typeof destroy === "function" && destroy();
    }, time + 250);
    return () => {
      clearTimeout(timerId);
      clearTimeout(destroyTimerId);
    };
  }, [time, destroy]);
  const classes = classNames("sz-toast", visiable ? "is-show" : "is-hide", {
    [`sz-toast__${type}`]: type,
  });
  return (
    <div className={classes}>
      <span
        className="sz-icon"
        dangerouslySetInnerHTML={{
          __html: map[type],
        }}
      ></span>
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
      time={props.time || 3000}
      destroy={destroy}
    />,
    instance
  );
};

export default Toast;
