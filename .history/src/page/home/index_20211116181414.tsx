import React, { useEffect, useState } from "react";
import Ajax from "../../service";
import Tab, { tabType } from "./components/tab";
import {List, ListItem} from '@src/packages'

export interface IParams {
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
  useEffect(() => {
    Ajax.getTopics({
      page: params.page,
      tab: params.tab,
      limit: params.limit,
    }).then((res) => {
      if (res.success) {
        console.log(res.data);
      }
    });
  }, [params.page, params.tab, params.limit]);
  return (
    <div className="sz-home">
      <Tab tab={params.tab} onChange={setParams} />
      <List>
          <ListItem>
              <p>123</p>
          </ListItem>
      </List>
    </div>
  );
};

export default Home;
