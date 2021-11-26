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
    limit: 1,
  });
  const { data, loading, error, add } = useURLLoader("getTopics", params, [
    params.page,
    params.tab,
    params.limit,
  ]);

  const { flag } = useScollLoad();

  useEffect(() => {
    if (!loading && flag) {
      setParams((state) => ({
        ...state,
        page: state.page + 1,
      }));
    }
  }, [flag, loading]);

  const [list, setList] = useState<ITopicsItemProps[]>([]);

  console.log(list, 'listlist')

  useEffect(() => {
    const josnData = JSON.parse(data);
    if (josnData && josnData.data instanceof Array && add) {
      if (params.page === 1) {
        console.log(josnData.data, 'josnData.datajosnData.data')
        setList(josnData.data);
      } else {
        alert(12)
        setList((state) => {
          return [...state, ...josnData.data];
        });
      }
    }
  }, [data, params.page, add]);
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
