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
  canReleaseText = "松开刷新",
  refreshingText = "加载中…",
  completeText = "刷新成功",
  children,
}) => {
  const [text, setText] = useState<any>("");
  const pullTorefresh = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState({
    startY: 0,
    transition: 0,
  });

  const setTranslate = (y=0, durutiion=0) => {
      if (pullTorefresh.current !== null) {
        pullTorefresh.current.style.transitionDuration = `${durutiion}s`;
        pullTorefresh.current.style.transform = `translate(0px, ${y}px) translateZ(0px)`;
      }
  }

  const touchmoveEvent = (e: any) => {
    const startY = e.touches ? e.touches[0].pageY : e.clientX;
    setTouch((state) => {
      const transition = startY - touch.startY;
      if (transition > 0 && transition <= 60) {
        if (pullTorefresh.current !== null) {
          pullTorefresh.current.style.transform =
            "translateY(" + transition + "px)";
        }
        setText(pullingText);
        if (transition >= 55) {
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
    setTouch((state) => {
      if (state.transition >= 55) {
        setText(refreshingText);
        setTimeout(() => {
            setText(completeText);
            setTranslate(0, .5);
        }, 1000);
      } else {
        setTranslate(0, .5);
      }
      return {
        ...state,
        transition: 0,
      };
    });
  };
  const touchstartEvent = (e: any) => {
    if (pullTorefresh.current !== null) {
      // 判断当scrollTop小于某个数时去绑定touchmove,touchend事件，主要是防止有下拉加载更多的时候
      if (getScrollTop() <= 0) {
        console.log("addEventListener");
        document.addEventListener("touchmove", touchmoveEvent);
        document.addEventListener("touchend", touchendEvent);
      } else {
        document.removeEventListener(
          "touchmove",
          touchmoveEvent,
          false
        );
        document.removeEventListener(
          "touchend",
          touchendEvent,
          false
        );
      }
      setTouch(() => {
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
      <div className="sz-pull-to-refresh__wrapper">{text}</div>
      {children}
    </div>
  );
};

export default PullToRefresh;