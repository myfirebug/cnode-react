import React, { useEffect, useState, useRef, useCallback, memo } from "react";

import Ajax from "../../service";

interface IScrollLoad {
    isScroll: boolean;
    pageSize: number;
    requestName: string;
    params: Object;
    render: Function
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

  const [data, setData] = useState({
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
            setData((state) => {
              loading.current = false;
              error.current = false;
              noMore.current = currPage.current === res.page.totalPage;
              return {
                datas: [...state.datas, ...res.datas],
                page: res.page,
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

  return <div></div>;
});

export default ScrollLoad;
