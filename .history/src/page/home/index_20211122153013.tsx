import React, { useState } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";
import Footer from "@src/components/footer";
import Ajax from "../../service";

import { InfiniteScroll } from "../../packages/";

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 1000,
  });

  const [data, setData] = useState<any[]>([]);

  const [isMore, setIsMore] = useState(true);

  async function loadMore() {
    console.log(1);
    const append = await Ajax.getTopics(params);
    console.log(2);
    if (append.data instanceof Array) {
      if (append.data.length === 0) {
        setIsMore(false);
        return;
      }
      setData((state) => {
        if (params.page === 1) {
          return append.data;
        } else {
          return [...state, ...append.data];
        }
      });
    }
  }

  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
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
