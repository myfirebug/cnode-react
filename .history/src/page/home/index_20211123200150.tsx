import React, { useState, useRef, useMemo } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import Footer from "@src/components/footer";
import Ajax from "../../service";
import Skeleton from "@src/packages/skeleton/skeleton";
import { InfiniteScroll, PullToRefresh } from "../../packages/";
import "./index.scss";

const Home: React.FC = () => {
  const [params, setParams] = useState({
    page: 1,
    tab: "",
    limit: 10,
    update: 0,
  });
  // 数据
  const [data, setData] = useState<any[]>([]);
  // 更多展示
  const [isMore, setIsMore] = useState(true);

  const loadMoreHandler = useMemo(() => {
    return async function loadMore() {
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
          if (params.page === 1) {
            return append.data;
          } else {
            return [...state, ...append.data];
          }
        });
      }
    };
  }, [params.page, params.tab, params.limit]);

  return (
    <div className="sz-home">
      <PullToRefresh
      callBack={() => setParams(state => ({
        ...state
      }))}
      >
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
          loadMore={loadMoreHandler}
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
