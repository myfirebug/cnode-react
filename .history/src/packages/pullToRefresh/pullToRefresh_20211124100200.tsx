import React, { FC, ReactNode, useRef, useState } from "react";
import { getScrollTop } from "../../util/tools";
import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
  children?: ReactNode;
  threshold?: number;
  infinite?: number;
  callBack?: () => void;
}

type statusType = "pulling" | "canRelease" | "refreshing" | "complete" | "";

const PullToRefresh: FC<IPullToRefreshProps> = ({
  pullingText = "下拉刷新",
  canReleaseText = "松开刷新",
  refreshingText = "加载中…",
  completeText = "刷新成功",
  threshold = 45,
  infinite = 1000,
  callBack,
  children,
}) => {
  // 获取的dom
  const pullTorefresh = useRef<HTMLDivElement>(null);
  // Y值
  const startTop = useRef(0);
  // 滚动的值
  const transitionValue = useRef(0);
  // 状态
  const status = useRef<statusType>("");
  // 显示的文本
  const [text, setText] = useState<any>("");
  // 定时器
  const timer = useRef<any>();
  /**
   * 设置样式
   * @param y 距离
   * @param durutiion 时间s
   */
  const setTranslate = (y = 0, durutiion = 0) => {
    if (pullTorefresh.current !== null) {
      pullTorefresh.current.style.transitionDuration = `${durutiion}s`;
      pullTorefresh.current.style.transform = `translate(0px, ${y}px) translateZ(0px)`;
    }
  };

  /**
   * 移动时
   * @param e
   */
  const touchmoveEvent = (e: any) => {
    const startY = e.touches ? e.touches[0].pageY : e.clientX;
    let transition = startY - startTop.current - getScrollTop();
    if (transition > 0) {
      if (transition > threshold) {
        transition = threshold;
      }
      setTranslate(transition, 0);
      setText(pullingText);
      status.current = "pulling";
      if (transition >= threshold - 10) {
        setText(canReleaseText);
        status.current = "canRelease";
      }
    }
    transitionValue.current = transition;
  };

  /**
   * 移出时
   */
  const touchendEvent = () => {
    document.removeEventListener("touchmove", touchmoveEvent, false);
    document.removeEventListener("touchend", touchendEvent, false);
    if (
      status.current === "canRelease" &&
      transitionValue.current >= threshold - 10
    ) {
      setText(refreshingText);
      status.current = "refreshing";
      typeof callBack === "function" && callBack();
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        setText(completeText);
        status.current = "complete";
        setTranslate(0, 0.5);
      }, infinite);
    } else {
      setTranslate(0, 0.5);
      status.current = "";
    }
  };
  /**
   * 开始时
   * @param e
   */
  const touchstartEvent = (e: any) => {
    // 判断当scrollTop小于某个数时去绑定touchmove,touchend事件，主要是防止有下拉加载更多的时候
    if (getScrollTop() <= 0) {
      document.addEventListener("touchmove", touchmoveEvent, false);
      document.addEventListener("touchend", touchendEvent, false);
    }
    // startY用来计算距离
    const startY = e.touches ? e.touches[0].pageY : e.clientY;
    startTop.current = startY;
    if (status.current === "pulling") {
      setTranslate(0, 0);
    }
    if (status.current === "complete") {
      status.current = "";
    }
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
    >
      <div className="sz-pull-to-refresh__wrapper">
        <span
          style={{
            position: "relative",
            transform: `rotate(${transitionValue.current}deg)`,
          }}
        >
          {transitionValue.current}
        </span>
        {text}
      </div>
      {children}
    </div>
  );
};

export default PullToRefresh;
