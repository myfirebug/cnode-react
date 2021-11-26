import React, { FC, ReactNode, Touch, TouchEvent, useRef } from "react";
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

  const touchmoveEvent = (e: TouchEventInit) => {
  };

  const touchendEvent = (e: TouchEventInit) => {
    console.log(e);};
  const touchstartEvent = (e: TouchEvent) => {
    if (pullTorefresh.current) {
      if (getScrollTop() < 10) {
        pullTorefresh.current.addEventListener("touchmove", touchmoveEvent);
        pullTorefresh.current.addEventListener("touchend", touchendEvent);
      } else {
        pullTorefresh.current.removeEventListener("touchmove", touchmoveEvent);
        pullTorefresh.current.removeEventListener("touchend", touchendEvent);
      }
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
