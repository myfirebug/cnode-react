import React, { useState } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";
import Footer from "@src/components/footer";

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 100,
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
      <Footer />
    </div>
  );
};

export default Home;
