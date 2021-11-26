import React, { FC, ReactNode, useRef, useCallback, useEffect } from "react";

interface IInfiniteScrollProps {
  element?: HTMLDivElement;
  loadMore: () => Promise<void>;
  threshold?: number;
  isMore: boolean;
  loadingText?: ReactNode | string;
  noMoreText?: ReactNode | string;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
  element,
  loadMore,
  threshold = 100,
  isMore,
  loadingText = "加载更多...",
  noMoreText = "——到底了——",
}) => {
  /**
   * [获取滚动条当前的位置]
   * @return {[Number]} [scrollTop]
   */
  const getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  };
  /**
   * [获取当前可视范围的高度]
   * @return {[Number]} [clientHeight]
   */
  const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    } else {
      clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    }
    return clientHeight;
  };

  /**
   * [获取当前可视范围的高度]
   * @return {[Number]} [clientHeight]
   */
  const getScrollHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  };

  /**
   * 判断是否可滚动加载
   */
  /**const scrollHandler = useCallback(() => {
    if (getScrollTop() + getClientHeight() + threshold > getScrollHeight()) {
        loadMore()
    }
  }, [threshold, loadMore]);*/

  useEffect(() => {
    loadMore()
  }, [])

  /*useEffect(() => {
    const newsElement = element || window;
    newsElement.addEventListener("scroll", scrollHandler);
    return () => {
      newsElement.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler, element]);*/
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
