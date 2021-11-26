import React, { FC, ReactNode, useRef, useCallback } from "react";

interface IInfiniteScrollProps {
  element?: HTMLDivElement;
  loadMore: () => Promise<void>;
  threshold?: number;
  isMore: boolean;
  loadingText?: ReactNode | string;
  noMoreText?: ReactNode | string;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
  element = document.getElementsByTagName('body')[0],
  loadMore,
  threshold = 100,
  isMore,
  loadingText = "加载更多...",
  noMoreText = "——到底了——",
}) => {
  const timer = useRef<number>();
  const check = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!isMore) return;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      // if (rect.height >= ) {}
    });
  }, [isMore]);
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
