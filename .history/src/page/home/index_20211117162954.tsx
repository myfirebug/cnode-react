import React, { useEffect, useState } from "react";
import Ajax from "../../service";
import Tab, { tabType } from "./components/tab";
import TopicsItem from "./components/topicsItem";
import {List, ListItem} from '@src/packages';
import useURLLoader from "@src/hook/useURLLoader";
import './index.scss'

export interface IParams {
  page: number;
  tab: tabType;
  limit: number;
}

interface IList {
    id: string;
    [propNames: string]: any
}

const Home: React.FC = () => {
  const [params, setParams] = useState<IParams>({
    page: 1,
    tab: "",
    limit: 20,
  });

  const {data, loading, error} = useURLLoader('getTopics', params, [params.page, params.tab, params.limit])

  console.log(data, loading, error)

  const [list, setList] = useState<IList[]>([])

  useEffect(() => {
    // setList(data)
  }, [data]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <List>
          {
              list.map(item => (
                <ListItem key={item.id}>
                    <TopicsItem id={item.id} />
                </ListItem>
              ))
          }
      </List>
    </div>
  );
};

export default Home;