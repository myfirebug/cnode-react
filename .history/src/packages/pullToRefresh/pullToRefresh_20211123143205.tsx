import React, { FC, ReactNode, TouchEvent } from "react";

import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}


const PullToRefresh:FC<IPullToRefreshProps> = () => {
    const touchstartEvent = (e:TouchEvent) => {
        console.log(e)
    }
    return (
        <div className="sz-pull-to-refresh" onTouchStart={touchstartEvent}>
        <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
        </div>
    )
}

export default PullToRefresh