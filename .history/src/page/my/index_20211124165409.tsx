import React, { FC } from "react";
import { List, ListItem } from "@src/packages";
import './index.scss'
interface IMyProps {}

const My: FC<IMyProps> = () => {
  return (
    <div className="sz-my">
      <div className="sz-my__header"></div>
      <div className="sz-my__body">

      </div>
      <List>
        <ListItem>
          <div>123</div>
        </ListItem>
        <ListItem>
          <div>123</div>
        </ListItem>
        <ListItem>
          <div>123</div>
        </ListItem>
      </List>
    </div>
  );
};

export default My;
