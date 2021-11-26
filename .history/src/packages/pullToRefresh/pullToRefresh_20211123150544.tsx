
import React, { FC, ReactNode, TouchEvent, useRef, useEffect, useState } from "react";
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
  const [scrollTop, setScrollTop] = useState(0)
    
  const touchstartEvent = (e: TouchEvent) => {
    setScrollTop(getScrollTop())
  };

  const touchmoveEvent = (e: TouchEvent) => {
  };

  const touchendEvent = (e: TouchEvent) => {
  };

  console.log(scrollTop, '111')
  useEffect(() => {
      if(scrollTop.current) {
        console.log(scrollTop.current)
      }
  }, [scrollTop])

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
