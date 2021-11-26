import React, { FC, ReactNode } from "react";

import "./style/index.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}


const PullToRefresh:FC<IPullToRefreshProps> = () => {
    const touchstartEvent = (e:any) => {
        console.log(e)
    }
    return (
        <div className="sz-pull-to-refresh" onTouchStart={touchstartEvent}>

        </div>
    )
}

export default PullToRefresh