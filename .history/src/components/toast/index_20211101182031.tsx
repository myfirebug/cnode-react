/*
 * @Author: hejp
 * @Date:   10:17
 * @Last Modified by:   hejp
 * @Last Modified time: 10:17
 */
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import { ReactNode } from "_@types_react@17.0.33@@types/react";
import classNames from 'classnames'

interface IToastProps {
  content?: ReactNode;
  time?: number;
}

const ToastComponent: React.FC<IToastProps> = ({ content, time = 3000 }) => {
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
  return <div className={classes}>{content}</div>;
};

let instance: Element | DocumentFragment;

const Toast = (props: IToastProps) => {
    const destroy = () => {
        ReactDOM.unmountComponentAtNode(instance)
        document.body.removeChild(instance)
    }

    if (instance) {
        destroy()
    }

    instance = document.createElement('div')
    document.body.appendChild(instance)

    return ReactDOM.render(
        <ToastComponent content={props.content} time={props.time || 3000}/>,
        instance
    );
};

export default Toast;
