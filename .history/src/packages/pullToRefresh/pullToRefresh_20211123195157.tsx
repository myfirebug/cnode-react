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
}

type statusType = "pulling" | "canRelease" | "refreshing" | "complete" | "";

const PullToRefresh: FC<IPullToRefreshProps> = ({
  pullingText = "下拉刷新",
  canReleaseText = "松开刷新",
  refreshingText = "加载中…",
  completeText = "刷新成功",
  threshold = 45,
  infinite = 2000,
  children,
}) => {
  const [text, setText] = useState<any>("");
  const pullTorefresh = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState({
    startY: 0,
    transition: 0,
  });

  const status = useRef<statusType>('')

  const timer = useRef<any>();

  console.log(status.current, 'statusstatus')

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
    setTouch((state) => {
      let transition = startY - touch.startY;
      if (transition > 0) {
        if (transition > threshold) {
          transition = threshold;
        }
        setTranslate(transition, 0);
        setText(pullingText);
        status.current = "pulling"
        if (transition >= threshold - 10) {
          setText(canReleaseText);
          status.current = "canRelease"
        }
      }
      return {
        ...state,
        transition: transition,
      };
    });
  };

  /**
   * 移出时
   */
  const touchendEvent = () => {
    document.removeEventListener("touchmove", touchmoveEvent, false);
    document.removeEventListener("touchend", touchendEvent, false);
    setTouch((state) => {
      if (state.transition >= threshold - 5) {
        setText(refreshingText);
        status.current = "refreshing"
        if (timer.current) {
          clearTimeout(timer.current);
        }
        status.current = "complete"
        timer.current = setTimeout(() => {
          setText(completeText);
          status.current = "complete"
          setTranslate(0, 0.5);
        }, infinite);
      } else {
        setTranslate(0, 0.5);
        status.current = ""
      }
      return {
        ...state,
      };
    });
  };
  /**
   * 开始时
   * @param e
   */
  const touchstartEvent = (e: any) => {
    setTouch((state) => {
      // 判断当scrollTop小于某个数时去绑定touchmove,touchend事件，主要是防止有下拉加载更多的时候
      if (getScrollTop() <= 0) {
        document.addEventListener("touchmove", touchmoveEvent);
        document.addEventListener("touchend", touchendEvent);
      }
      // startY用来计算距离
      const startY = e.touches ? e.touches[0].pageY : e.clientY;
      if (status.current === "pulling") {
        setTranslate(0, 0);
      }
      return {
        ...state,
        startY: startY,
      };
    });
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
    >
      <div className="sz-pull-to-refresh__wrapper">{text}</div>
      {children}
    </div>
  );
};

export default PullToRefresh;
