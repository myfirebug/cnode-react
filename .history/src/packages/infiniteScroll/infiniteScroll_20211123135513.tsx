/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import "./style/infiniteScroll.scss";

interface IInfiniteScrollProps {
  loadMore: () => Promise<void>;
  threshold?: number;
  isMore: boolean;
  loadingText?: ReactNode | string;
  noMoreText?: ReactNode | string;
  update?: number;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
  loadMore,
  threshold = 100,
  isMore,
  loadingText = "加载中...",
  noMoreText = "——到底了——",
  update
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

  // 锁定请求~~
  const lock = useRef(false);

  async function doLoadMore() {
    if (lock.current) return;
    lock.current = true;
    try {
      const ret = await loadMore();
      lock.current = false;
      return ret;
    } catch (e) {
      lock.current = false;
      throw e;
    }
  }

  /**
   * 判断是否可滚动加载
   */
  const scrollHandler = useCallback(() => {
    if (getScrollTop() + getClientHeight() + threshold > getScrollHeight()) {
      doLoadMore();
    }
  }, [threshold, doLoadMore]);

  useEffect(() => {
    doLoadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);
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
