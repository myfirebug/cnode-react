import React, { useState } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";
import Footer from "@src/components/footer";
import Ajax from '../../service';

import {InfiniteScroll} from '../../packages/'

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
  });

  const [data, setData] = useState([])

  const [isMore, setIsMore] = useState(true)

  async function loadMore() {
    const append =  await Ajax.getTopics(params)
    console.log(append, 'appendappend')
  }

  

  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <InfiniteScroll loadMore={function (): Promise<void> {
        throw new Error("Function not implemented.");
      } } isMore={isMore} />
      <Footer />
    </div>
  );
};

export default Home;
