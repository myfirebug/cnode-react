import React, { FC, useEffect, useState } from "react";
import { List, ListItem } from "@src/packages";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { getUrl } from "@util/tools";
import Ajax from "@src/service";
import { ITopic } from "@src/types";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";

interface IMyProps {
  token: string;
}

const My: FC<IMyProps> = ({ token }) => {
  let history = useHistory();
  const [details, setDetails] = useState<any>({});
  useEffect(() => {
    const loginname = getUrl("loginname");
    if (!loginname) {
      history.push("/login");
    } else {
      Ajax.user({
        loginname: loginname,
      }).then((res) => {
        if (res.success) {
          setDetails(res.data);
        }
      });
    }
  }, []);
  return (
    <div className="sz-my">
      <div className="sz-my__header"></div>
      <div className="sz-my__body">
        <div className="sz-box">
          <div className="sz-box__body">
            <List>
              <ListItem
              after={<span className="ued-mobile">&#xe6b1;</span>}>
                <div>换肤</div>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="sz-box">
          <div className="sz-box__header">最近创建的话题</div>
          <div className="sz-box__body">
            <List>
              {details.recent_topics
                ? details.recent_topics.map((item: ITopic) => (
                    <ListItem
                      key={item.id}
                      after={<span className="ued-mobile">&#xe6b1;</span>}
                      before={
                        <div className="avatar">
                          <img
                            src={item.author.avatar_url}
                            alt={item.author.loginname}
                          />
                        </div>
                      }
                    >
                      <div>{item.title}</div>
                    </ListItem>
                  ))
                : null}
            </List>
          </div>
        </div>

        <div className="sz-box">
          <div className="sz-box__header">最近参与的话题</div>
          <div className="sz-box__body">
            <List>
              {details.recent_replies
                ? details.recent_replies.map((item: ITopic) => (
                    <ListItem
                      key={item.id}
                      after={<span className="ued-mobile">&#xe6b1;</span>}
                      before={
                        <div className="avatar">
                          <img
                            src={item.author.avatar_url}
                            alt={item.author.loginname}
                          />
                        </div>
                      }
                    >
                      <div>{item.title}</div>
                    </ListItem>
                  ))
                : null}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.userInfo.token,
});

export default connect(mapStateToProps)(My);
