import React, { FC } from "react";

interface IInfiniteScrollProps {
    loadMore: () => Promise<void>;
    threshold?: number;
    isMore: boolean;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
    loadMore,
    threshold,
    isMore
}) => {
  return <div className="sz-infinite-scroll"></div>;
};

export default InfiniteScroll;
