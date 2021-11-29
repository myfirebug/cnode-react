import React, { FC, ReactNode, useRef, useState } from "react";
import { getScrollTop } from "../../util/tools";
import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
  children?: ReactNode;
}

const PullToRefresh: FC<IPullToRefreshProps> = ({
  pullingText = "下拉刷新",
  canReleaseText = "释放立即刷新",
  refreshingText = "加载中……",
  completeText = "刷新成功",
  children,
}) => {
  const [text, setText] = useState<any>("");

  const pullTorefresh = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState({
    startY: 0,
    transition: 0,
  });

  const touchmoveEvent = (e: any) => {
    const startY = e.touches ? e.touches[0].pageY : e.clientX;
    setTouch((state) => {
      const transition = startY - touch.startY;

      console.log(transition, 'transition')

      if (transition > 0 && transition < 60) {
        if (pullTorefresh.current !== null) {
          pullTorefresh.current.style.transform =
            "translateY(" + transition + "px)";
        }
        setText(pullingText);
        if (transition > 55) {
          setText(canReleaseText);
        }
      }
      return {
        ...state,
        transition: transition,
      };
    });
  };

  const touchendEvent = () => {
    if (pullTorefresh.current !== null) {
      pullTorefresh.current.style.transition = "transform 0.5s ease 1s";
      pullTorefresh.current.style.transform = "translateY(0px)";
      setText(refreshingText);
    }
  };
  const touchstartEvent = (e: any) => {
    if (pullTorefresh.current !== null) {
      // 判断当scrollTop小于某个数时去绑定touchmove,touchend事件，主要是防止有下拉加载更多的时候
      if (getScrollTop() < 10) {
        document.addEventListener("touchmove", touchmoveEvent);
        document.addEventListener("touchend", touchendEvent);
      } else {
        document.removeEventListener("touchmove", touchmoveEvent);
        document.removeEventListener("touchend", touchendEvent);
      }
      setTouch((state) => {
        // startY用来计算距离
        const startY = e.touches ? e.touches[0].pageY : e.clientY;
        if (pullTorefresh.current) {
          pullTorefresh.current.style.transition = "transform 0s";
        }
        return {
          startY: startY,
          transition: 0,
        };
      });
    }
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
    >
      <div>{text}</div>
      {children}
    </div>
  );
};

export default PullToRefresh;