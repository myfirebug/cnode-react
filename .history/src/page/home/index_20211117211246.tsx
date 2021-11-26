import React, { useEffect, useState } from "react";
import Tab, { tabType } from "./components/tab";
import TopicsItem, { ITopicsItemProps } from "./components/topicsItem";
import { List, ListItem } from "@src/packages";
import useURLLoader from "@src/hook/useURLLoader";
import "./index.scss";
import ScrollLoad from '../../components/scrollLoad'

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
  // const { data, loading, error } = useURLLoader("getTopics", JSON.stringify(params));

  // const [list, setList] = useState<ITopicsItemProps[]>([]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <ScrollLoad isScroll={true} pageSize={1} requestName={"getTopics"} params={params} render={(data) => console.log(data)} />
    </div>
  );
};

export default Home;
