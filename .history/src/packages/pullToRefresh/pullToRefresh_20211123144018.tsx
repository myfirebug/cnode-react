import React, { FC, ReactNode, TouchEvent, useRef } from "react";

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
    console.log(window);
    console.log(e);
  };
  const touchmoveEvent = (e: TouchEvent) => {
    console.log(e);
  };

  const touchendEvent = (e: TouchEvent) => {
    console.log(e);
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
