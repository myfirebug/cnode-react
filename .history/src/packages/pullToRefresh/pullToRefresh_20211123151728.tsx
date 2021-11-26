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

  const touchmoveEvent = (e:TouchEventInit) => {
      console.log(e)
  };

  const touchendEvent = (e: TouchEvent) => {};
  const touchstartEvent = (e: TouchEvent) => {
    if (getScrollTop() < 10 && pullTorefresh.current) {
      pullTorefresh.current.addEventListener("touchmove", touchmoveEvent);
    } else {
        pullTorefresh.current?.removeEventListener("touchmove", touchmoveEvent)
    }
  };

  return (
    <div
      ref={pullTorefresh}
      className="sz-pull-to-refresh"
      onTouchStart={touchstartEvent}
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
