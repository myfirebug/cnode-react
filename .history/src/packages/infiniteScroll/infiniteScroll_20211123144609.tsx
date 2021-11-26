/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import {getScrollTop,getClientHeight,getScrollHeight} from '../../util/tools'
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
