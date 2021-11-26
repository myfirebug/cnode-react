import React, { FC, ReactNode } from "react";

import "./style/pullToRefresh.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}


const PullToRefresh:FC<IPullToRefreshProps> = () => {
    const touchstartEvent = (e:HTMLDivElement) => {
        console.log(e)
    }
    return (
        <div className="sz-pull-to-refresh" onTouchStart={(e:HTMLDivElement) => touchstartEvent(e)}>
        <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
            <p>3131231231231</p>
        </div>
    )
}

export default PullToRefresh