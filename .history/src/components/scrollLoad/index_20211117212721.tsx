import React, { useEffect, useState, useRef, useCallback, memo } from "react";

import Ajax from "../../service";
import './index.scss'

interface IData {
  datas: any[];
  page: {
    currPage: number;
    pageSize: number;
    total: number;
    totalPage: number;
  };
}

interface IScrollLoad {
  isScroll: boolean;
  pageSize: number;
  requestName: string;
  params: Object;
  render: (data: IData) => void;
}

const ScrollLoad = memo((props: IScrollLoad) => {
  const {
    isScroll, // 是否滚动加载
    pageSize, // 一页显示几条数据，默认：10条
    requestName, //接口请求
    params, // 接口请求参数
    render,
  } = props;
  // 加载第一面的时候，不然会造成死循环
  let flag = useRef(false);
  // 当前页
  let currPage = useRef(1);
  // 是否在加载中
  let loading = useRef(false);
  // 是否加载失败
  let error = useRef(false);
  // 到底了
  let noMore = useRef(false);

  const [data, setData] = useState<IData>({
    // 数据
    datas: [],
    // 分页
    page: {
      currPage: 1,
      pageSize: 10,
      total: 0,
      totalPage: 0,
    },
  });

  // 获取数据
  const getData = useCallback(() => {
    if (!loading.current && Ajax[requestName]) {
      setData((state) => {
        loading.current = true;
        error.current = false;
        return {
          ...state,
        };
      });
      Ajax[requestName]({
        ...params,
        page: currPage.current,
        limitPage: pageSize,
        LOADING: currPage.current === 1,
      })
        .then((res) => {
          if (res.success) {
            setData((state: IData) => {
              loading.current = false;
              error.current = false;
              noMore.current = currPage.current === 5;
              return {
                datas: [...state.datas, ...res.data],
                page: {
                  currPage: 1,
                  pageSize: 10,
                  total: 0,
                  totalPage: 5,
                },
              };
            });
          } else {
            setData((state) => {
              error.current = true;
              return {
                ...state,
              };
            });
          }
        })
        .catch(() => {
          setData((state) => {
            loading.current = false;
            error.current = true;
            return {
              ...state,
            };
          });
        });
    }
  }, [pageSize, requestName, params]);

  useEffect(() => {
    if (!flag.current) {
      currPage.current = 1;
      loading.current = false;
      error.current = false;
      noMore.current = false;
      setData({
        // 数据
        datas: [],
        // 分页
        page: {
          currPage: 1,
          pageSize: 10,
          total: 0,
          totalPage: 10,
        },
      });
      flag.current = true;
      getData();
    }
  }, [requestName, setData, flag, getData]);

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
  const scrollHandler = useCallback(() => {
    if (
      isScroll &&
      getScrollTop() + getClientHeight() + 50 > getScrollHeight()
    ) {
      if (data.page.currPage < data.page.totalPage && !loading.current) {
        currPage.current = currPage.current + 1;
        if (currPage.current > data.page.totalPage) {
          return false;
        } else {
          getData();
        }
      }
    }
  }, [data.page.currPage, data.page.totalPage, isScroll, getData]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="sz-scroll-load">
      {render &&
        render(data)}
      {loading.current && currPage.current !== 1 && (
        <div className="sz-scroll-load__loading">
          <span className="loading"></span>
          <span className="text">数据加载中...</span>
        </div>
      )}
      {noMore.current ? <div className="sz-scroll-load__nodata">--到底了--</div> : null}
    </div>
  );
});

export default ScrollLoad;
