import React, { useEffect, useState } from "react";
import Tab, { tabType } from "./components/tab";
import TopicsItem, { ITopicsItemProps } from "./components/topicsItem";
import { List, ListItem } from "@src/packages";
import useURLLoader from "@src/hook/useURLLoader";
import "./index.scss";

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
  const { data, loading, error } = useURLLoader("getTopics", params, [
    params.page,
    params.tab,
    params.limit,
  ]);

  const [list, setList] = useState<ITopicsItemProps[]>([]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <List>
        {list.map((item, index) => (
          <ListItem key={item.id}>
            <>
              <p>{item.id}</p>
              <TopicsItem {...item} />
            </>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
