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

  useEffect(() => {
    if (!loading && flag) {
      setParams(state => ({
        ...state,
        page: state.page + 1
      }))
    }
  }, [flag, loading])

  const [list, setList] = useState<ITopicsItemProps[]>([]);

  useEffect(() => {
    const josnData = JSON.parse(data)
    if (josnData && josnData.data instanceof Array) {
      if (params.page === 1) {
        setList(josnData.data);
      } else {
        setList(state => {
          console.log([
            ...state,
            ...josnData.data
          ])
          return [
            ...state,
            ...josnData.data
          ]
        })
      }
    }
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