import React, { useEffect, useState } from "react";
import Ajax from "../../service";
import Tab, { tabType } from "./components/tab";
import TopicsItem from "./components/topicsItem";
import {List, ListItem} from '@src/packages'

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
    limit: 10,
  });

  const [list, setList] = useState<IList[]>([])

  useEffect(() => {
    Ajax.getTopics({
      page: params.page,
      tab: params.tab,
      limit: params.limit,
    }).then((res) => {
      if (res.success) {
        setList(res.data)
      }
    });
  }, [params.page, params.tab, params.limit]);
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
