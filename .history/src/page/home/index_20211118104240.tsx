import React, { useState } from "react";
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
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
  });
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <ScrollLoad
        setParams={setParams}
        isScroll={true}
        pageSize={1}
        requestName={"getTopics"}
        params={JSON.stringify(params)}
        render={(data) => (
          <div className="sz-topics__list">
            {data.datas.map((item) => (
              <TopicsItem {...item} />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default Home;
