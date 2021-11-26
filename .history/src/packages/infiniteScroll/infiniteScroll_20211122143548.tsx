import React, { FC, ReactNode } from "react";

interface IInfiniteScrollProps {
  loadMore: () => Promise<void>;
  threshold?: number;
  isMore: boolean;
  loadingText?: ReactNode | string;
  noMoreText?: ReactNode | string;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
  loadMore,
  threshold = 100,
  isMore,
  loadingText = "加载更多...",
  noMoreText = "——到底了——",
}) => {
  return (
    <div className="sz-infinite-scroll">
      {isMore ? (
        <div className="sz-infinite-scroll__loading">
          <span className="loading"></span>
          <span className="text">{loadingText}</span>
        </div>
      ) : (
        <div className="sz-infinite-scroll__nomore">{noMoreText}</div>
      )}
    </div>
  );
};

export default InfiniteScroll;
