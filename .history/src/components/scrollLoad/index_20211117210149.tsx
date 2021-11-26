import React, { useEffect, useState, useRef, useCallback, memo } from "react";

import Ajax from "../../service";

interface IScrollLoad {}

const ScrollLoad = memo((props: IScrollLoad) => {
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

  return <div></div>;
});

export default ScrollLoad;
