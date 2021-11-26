import React, { FC } from "react";
import { List, ListItem } from "@src/packages";
import "./index.scss";
interface IMyProps {}

const My: FC<IMyProps> = () => {
  return (
    <div className="sz-my">
      <div className="sz-my__header"></div>
      <div className="sz-my__body">
      <div className="sz-box">
          <div className="sz-box__header">最近创建的话题</div>
          <div className="sz-box__body">
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
        </div>

        <div className="sz-box">
          <div className="sz-box__header">最近参与的话题</div>
          <div className="sz-box__body">
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
        </div>
      </div>
    </div>
  );
};

export default My;
