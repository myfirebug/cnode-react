import React, { FC, ReactNode, useRef, useState } from "react";
import { getScrollTop } from "../../util/tools";
import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}

const PullToRefresh: FC<IPullToRefreshProps> = () => {
  const pullTorefresh = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState({
    startY: 0,
    startX: 0
  })

  const touchmoveEvent = (e: TouchEventInit) => {
      
  };

  const touchendEvent = (e: TouchEventInit) => {
    console.log(e);};
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
          // X的作用是用来计算方向，如果是横向，则不进行动画处理，避免误操作
          const startX = e.touches ? e.touches[0].pageX : e.clientX;
          if (pullTorefresh.current) {
            pullTorefresh.current.style.position = 'relative';
            pullTorefresh.current.style.transition = 'transform 0s';

          }
          return {
            startY:startY,
            startX:startX
          }
      })
    }
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
    >
      <p>3131231231231</p>
      <p>3131231231231</p>
      <p>3131231231231</p>
      <p>3131231231231</p>
      <p>3131231231231</p>
    </div>
  );
};

export default PullToRefresh;
