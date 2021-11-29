import React, { FC, useEffect } from "react";
import { List, ListItem } from "@src/packages";
import {
  useHistory
} from 'react-router-dom';
import "./index.scss";
import {getUrl} from '@util/tools'
interface IMyProps {}

const My: FC<IMyProps> = () => {
  let history = useHistory()
  useEffect(() => {
    const loginname = getUrl('loginname')
    if (!loginname) {
      history.push('/login')
    }
  }, [])
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
              <ListItem
                after={<span className="ued-mobile">&#xe6b1;</span>}
                before={<div className="avatar"></div>}
              >
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