
import React, { FC, ReactNode, TouchEvent, useRef } from "react";
import {getScrollTop} from '../../util/tools'
import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}

const PullToRefresh: FC<IPullToRefreshProps> = () => {
  const pullTorefresh = useRef<HTMLDivElement>(null);
    
  const touchstartEvent = (e: TouchEvent) => {
    if (getScrollTop() < 10) {
        alert(123)
    }
  };

  const touchmoveEvent = (e: TouchEvent) => {
  };

  const touchendEvent = (e: TouchEvent) => {
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
      onTouchMove={touchmoveEvent}
      onTouchEnd={touchendEvent}
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
