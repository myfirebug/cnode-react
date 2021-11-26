import React, { FC, ReactNode, useRef, useState } from "react";
import { getScrollTop } from "../../util/tools";
import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
  children?: ReactNode
}

const PullToRefresh: FC<IPullToRefreshProps> = ({
    children
}) => {
  const pullTorefresh = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState({
    startY: 0,
  });

  const touchmoveEvent = (e: any) => {
    const startY = e.touches ? e.touches[0].pageY : e.clientX;
    const transition = startY - touch.startY;
    
    if (transition > 0 && transition <60) {
        if (pullTorefresh.current !== null) {
            pullTorefresh.current.style.transform = 'translateY('+transition+'px)'
        }
        console.log('下拉刷新')
        if (transition > 55) {
            console.log('释放更新')
        }
    }
  };

  const touchendEvent = (e: TouchEventInit) => {
    if (pullTorefresh.current !== null) {
        pullTorefresh.current.style.transition = 'transform 0.5s ease 1s';
        pullTorefresh.current.style.transform = 'translateY(0px)';
        console.log('更新中...')

    }
  };
  const touchstartEvent = (e: any) => {
    if (pullTorefresh.current !== null) {
      // 判断当scrollTop小于某个数时去绑定touchmove,touchend事件，主要是防止有下拉加载更多的时候
      if (getScrollTop() < 10) {
        pullTorefresh.current.addEventListener("touchmove", touchmoveEvent);
        pullTorefresh.current.addEventListener("touchend", touchendEvent);
      } else {
        pullTorefresh.current.removeEventListener("touchmove", touchmoveEvent);
        pullTorefresh.current.removeEventListener("touchend", touchendEvent);
      }
      setTouch(() => {
        // startY用来计算距离
        const startY = e.touches ? e.touches[0].pageY : e.clientY;
        if (pullTorefresh.current) {
          pullTorefresh.current.style.position = "relative";
          pullTorefresh.current.style.transition = "transform 0s";
        }
        return {
          startY: startY,
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
      {children}
    </div>
  );
};

export default PullToRefresh;
