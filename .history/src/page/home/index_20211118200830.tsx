import React, { useState } from "react";
import Tab from "./components/tab";
import TopicsItem from "./components/topicsItem";
import "./index.scss";
import ScrollLoad from "../../components/scrollLoad";
import Footer from "@src/components/footer";
import {Skeleton} from "../../packages/index";

const Home: React.FC = () => {
  const [params, setParams] = useState<any>({
    page: 1,
    tab: "",
    limit: 10,
  });
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <Skeleton image={{
        show: true,
        type: 'image',
        width: '100%',
        height: 200
      }}
      rows={3}
      />
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