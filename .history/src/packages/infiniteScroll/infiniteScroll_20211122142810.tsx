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
    threshold,
    isMore,
    loadingText = '加载更多...',
    noMoreText = '——到底了——'
}) => {
  return (
    <div className="sz-infinite-scroll"></div>
  );
};

export default InfiniteScroll;
