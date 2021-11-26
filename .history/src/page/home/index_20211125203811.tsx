import React, { useState, useCallback } from "react";
import Tab, { tabType } from "./components/tab";
import TopicsItem from "./components/topicsItem";
import Footer from "@src/components/footer";
import Ajax from "../../service";
import Skeleton from "@src/packages/skeleton/skeleton";
import { InfiniteScroll, PullToRefresh } from "../../packages/";
import "./index.scss";

interface IParams {
  page: number;
  tab: tabType;
  limit: number;
  update: number;
  LOADING: boolean;
}

const Home: React.FC = () => {
  const [params, setParams] = useState<IParams>({
    page: 1,
    tab: "",
    limit: 10,
    update: 0,
    LOADING: true
  });
  // 数据
  const [data, setData] = useState<any[]>([]);
  // 更多展示
  const [isMore, setIsMore] = useState(true);

  async function loadMore() {
    console.log(params, 'params')
    const append = await Ajax.getTopics({
      page: params.page,
      tab: params.tab,
      limit: params.limit,
      LOADING: params.LOADING
    });
    if (append.data instanceof Array) {
      // 无更多数据了
      if (append.data.length === 0) {
        setIsMore(false);
        return;
      }
      // 加载下一页数据
      setParams((state) => ({
        ...state,
        page: state.page + 1,
        LOADING: false
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
  }

  const pullToRefreshHandler = useCallback(() => {
    setParams((state) => ({
      ...state,
      page: 1,
      update: new Date().getTime(),
    }));
  }, [setParams]);

  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <PullToRefresh callBack={pullToRefreshHandler} infinite={2000}>
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
      <Footer value="home" />
    </div>
  );
};

export default Home;
