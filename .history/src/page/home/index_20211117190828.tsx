import React, { useEffect, useState } from "react";
import Ajax from "../../service";
import Tab, { tabType } from "./components/tab";
import TopicsItem from "./components/topicsItem";
import { List, ListItem } from "@src/packages";
import useURLLoader from "@src/hook/useURLLoader";
import "./index.scss";

interface IParams {
  page: number;
  tab: tabType;
  limit: number;
}

interface IListItem {
  id: string;
  title: string;
  reply_count: number;
  visit_count: number;
  [propNames: string]: any;
}

const Home: React.FC = () => {
  const [params, setParams] = useState<IParams>({
    page: 10,
    tab: "",
    limit: 20,
  });
  const { data, loading, error } = useURLLoader("getTopics", params, [
    params.page,
    params.tab,
    params.limit,
  ]);

  const [list, setList] = useState<IListItem[]>([]);

  useEffect(() => {
    if (data && data.data instanceof Array) {
      setList(data.data);
    }
    console.log(data);
  }, [data, params.page]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <TopicsItem id={item.id} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
