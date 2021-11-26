import React, { useState, useRef } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import Footer from "@src/components/footer";
import Ajax from "../../service";
import Skeleton from "@src/packages/skeleton/skeleton";
import { InfiniteScroll } from "../../packages/";
import "./index.scss";


const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
  });
  // 数据
  const [data, setData] = useState<any[]>([]);
  // 更多展示
  const [isMore, setIsMore] = useState(true);
  // loading
  const [loading, setLoading] = useState(false)


  async function loadMore() {
    setLoading(true)
    const append = await Ajax.getTopics(params);
    setLoading(false)
    if (append.data instanceof Array) {
      // 无更多数据了
      if (append.data.length === 0) {
        setIsMore(false);
        return;
      }
      // 加载下一页数据
      setParams((state: { page: number; }) => ({
        ...state,
        page: state.page + 1
      }))
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

  console.log(loading, 'loadingloading')

  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />

      {loading ? (
        <Skeleton
          image={{
            show: true,
          }}
          rows={5}
        />
      ) : null}

      <div className="sz-topics__list">
        {data.map((item) => (
          <TopicsItem {...item} />
        ))}
      </div>

      <InfiniteScroll loadMore={loadMore} isMore={isMore} />
      <Footer />
    </div>
  );
};

export default Home;
function state(state: any, arg1: any) {
  throw new Error("Function not implemented.");
}
