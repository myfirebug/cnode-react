/*
 * @Author: hejp
 * @Date:   10:17
 * @Last Modified by:   hejp
 * @Last Modified time: 10:17
 */
import React, { useState, useEffect } from "react";
import { ReactNode } from "_@types_react@17.0.33@@types/react";
import classNames from 'classnames'

interface IToastProps {
  content?: ReactNode;
  time?: number;
}

const ToastComponent: React.FC<IToastProps> = ({ content, time = 1000 }) => {
  const [visiable, setVisiable] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiable(false);
    }, time);
    return () => {
      clearTimeout(timerId);
    };
  }, [time]);
  const classes = classNames('sz-toast', visiable ? 'is-show' : 'is-hide')
  return <div lcassName={classes}>{content}</div>;
};

export default ToastComponent;