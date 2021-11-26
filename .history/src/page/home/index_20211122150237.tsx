import React, { useState } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";
import Footer from "@src/components/footer";

import {InfiniteScroll} from '../../packages/'

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
  });
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <InfiniteScroll loadMore={function (): Promise<void> {
        throw new Error("Function not implemented.");
      } } isMore={false} />
      <Footer />
    </div>
  );
};

export default Home;
