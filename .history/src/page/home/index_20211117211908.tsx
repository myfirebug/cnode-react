import React, { useEffect, useState } from "react";
import Tab, { tabType } from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";

interface IParams {
  page: number;
  tab: tabType;
  limit: number;
}

const Home: React.FC = () => {
  const [params, setParams] = useState<IParams>({
    page: 1,
    tab: "",
    limit: 1,
  });
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <ScrollLoad
        isScroll={true}
        pageSize={1}
        requestName={"getTopics"}
        params={params}
        render={(data) => <>
          {
            data.datas.map(item => (
              <TopicsItem {...item}/>
            ))
          }
        </>}
      />
    </div>
  );
};

export default Home;
