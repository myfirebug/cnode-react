import React, { useEffect, useState, useRef, useCallback, memo } from "react";

import Ajax from "../../service";
import "./index.scss";

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
  params: string;
  render: (data: IData) => void;
  setParams: Function;
}

const ScrollLoad = memo((props: IScrollLoad) => {
  const {
    isScroll, // 是否滚动加载
    pageSize, // 一页显示几条数据，默认：10条
    requestName, //接口请求
    params, // 接口请求参数
    render,
    setParams,
  } = props;

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
      loading.current = true;
      error.current = false;
      const jsonParams = JSON.parse(params);
      Ajax[requestName]({
        ...jsonParams,
        limitPage: pageSize,
        LOADING: jsonParams.page === 1,
      })
        .then((res) => {
          if (res.success) {
            setData((state: IData) => {
              loading.current = false;
              error.current = false;
              noMore.current = jsonParams.page === data.page.totalPage;
              if (jsonParams.page === 1) {
                return {
                  datas: res.data,
                  page: {
                    currPage: jsonParams.page,
                    pageSize: 10,
                    total: 0,
                    totalPage: 5,
                  },
                };
              } else {
                return {
                  datas: [...state.datas, ...res.data],
                  page: {
                    currPage: jsonParams.page,
                    pageSize: 10,
                    total: 0,
                    totalPage: 5,
                  },
                };
              }
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
  }, [pageSize, requestName, params, setData]);
  console.log(params, "paramsparamsparams");

  useEffect(() => {
    getData();
  }, [requestName, setData, getData]);

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
        setParams((state: any) => {
          let newsPage = data.page.currPage + 1;
          if (newsPage > data.page.totalPage) {
            newsPage = data.page.totalPage;
          }
          return {
            ...state,
            page: newsPage,
          };
        });
      }
    }
  }, [data.page.currPage, data.page.totalPage, isScroll, setParams]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="sz-scroll-load">
      {render && render(data)}
      {loading.current && data.page.currPage !== 1 && (
        <div className="sz-scroll-load__loading">
          <span className="loading"></span>
          <span className="text">数据加载中...</span>
        </div>
      )}
      {noMore.current ? (
        <div className="sz-scroll-load__nodata">--到底了--</div>
      ) : null}
    </div>
  );
});

export default ScrollLoad;
