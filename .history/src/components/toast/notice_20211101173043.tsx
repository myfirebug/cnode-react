import React, { FC, ReactNode, useState, useRef, useEffect } from "react";
import classNames from "classnames";

const map = {
  loading: "&#xeb01;",
  html: "",
  success: "&#xe61e;",
  warning: "&#xe62f;",
  error: "&#xe622;",
};

export interface INotice {
  duration?: number;
  content?: ReactNode;
  onClose?: () => void;
  type?: "loading" | "html" | "success" | "warning" | "error";
  destroy: () => void;
}

const Notice: FC<INotice> = ({
  duration = 1000,
  content,
  onClose,
  type = "loading",
  destroy,
}) => {
  const destroyTimer: any = useRef(null);
  const timmer: any = useRef(null);
  const [visible, setVisible] = useState(true);
  const classes = classNames(
    "sz-toast",
    {
      [` sz-toast__${type}`]: type,
    },
    visible ? " is-show" : " is-hide"
  );
  useEffect(() => {
    timmer.current = setTimeout(() => {
      setVisible(false);
      typeof onClose === "function" && onClose();
    }, duration);
    destroyTimer.current = setTimeout(() => {
      destroy();
    }, duration + 250);
    return () => {
      clearTimeout(timmer.current);
      clearTimeout(destroyTimer.current);
    };
  }, [duration, onClose, destroy, timmer, destroyTimer]);

  return (
    <div className={classes}>
      <span
        dangerouslySetInnerHTML={{
          __html: map[type],
        }}
        className="sz-icon"
      ></span>
      {content}
    </div>
  );
};

export default Notice;
