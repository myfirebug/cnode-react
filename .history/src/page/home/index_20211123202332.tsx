import React, { useState, useRef, useMemo } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import Footer from "@src/components/footer";
import Ajax from "../../service";
import Skeleton from "@src/packages/skeleton/skeleton";
import { InfiniteScroll, PullToRefresh } from "../../packages/";
import "./index.scss";

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
    update: 0,
  });
  // 数据
  const [data, setData] = useState<any[]>([]);
  // 更多展示
  const [isMore, setIsMore] = useState(true);

  async function loadMore() {
    const append = await Ajax.getTopics({
      page: params.page,
      tab: params.tab,
      limit: params.limit,
    });
    if (append.data instanceof Array) {
      // 无更多数据了
      if (append.data.length === 0) {
        setIsMore(false);
        return;
      }
      // 加载下一页数据
      setParams((state: { page: number }) => ({
        ...state,
        page: state.page + 1,
      }));
      // 保存数据
      setData((state) => {
        return append.data
      });
    }
  }

  const pullToRefreshHandler = () => {
    setParams((state: { page: number; update: number }) => ({
      ...state,
      page: 1,
      update: new Date().getTime(),
    }));
  };

  return (
    <div className="sz-home">
      <PullToRefresh callBack={pullToRefreshHandler}>
        <div className="sz-topics__list">
          {data.map((item) => (
            <TopicsItem {...item} />
          ))}
        </div>
        {isMore && params.page === 1 ? (
          <Skeleton
            image={{
              show: true,
            }}
            rows={5}
          />
        ) : null}

        <InfiniteScroll
          loadMore={loadMore}
          isMore={isMore}
          update={params.update}
        />
      </PullToRefresh>
      <Tab tab={params.tab} onChange={setParams} />
      <Footer />
    </div>
  );
};

export default Home;
