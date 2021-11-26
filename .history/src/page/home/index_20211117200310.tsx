import React, { useEffect, useState } from "react";
import Tab, { tabType } from "./components/tab";
import TopicsItem, { ITopicsItemProps } from "./components/topicsItem";
import { List, ListItem } from "@src/packages";
import useURLLoader from "@src/hook/useURLLoader";
import useScollLoad from "@src/hook/useScrollLoad";
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
    limit: 10,
  });
  const { data, loading, error } = useURLLoader("getTopics", params, [
    params.page,
    params.tab,
    params.limit,
  ]);

  const {flag, scrollTop} = useScollLoad()
  console.log(flag, scrollTop, 'flag, scrollTop')

  const [list, setList] = useState<ITopicsItemProps[]>([]);

  useEffect(() => {
    if (data && data.data instanceof Array) {
      if (params.page === 1) {
        setList(data.data);
      } else {
        setList(state => ([
          ...state,
          ...data.data
        ]))
      }
    }
    console.log(data);
  }, [data, params.page]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <TopicsItem {...item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
