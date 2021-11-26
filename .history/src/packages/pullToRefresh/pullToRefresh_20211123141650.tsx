import React, { FC, ReactNode } from "react";

import "./style/index.scss";

interface IPullToRefreshProps {
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
}


const PullToRefresh:FC<IPullToRefreshProps> = () => {
    return (
        <div className="sz-pull-to-refresh">
            
        </div>
    )
}

export default PullToRefresh