import React, { FC, useEffect, useState, useCallback } from "react";
import { List, ListItem } from "@src/packages";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { getUrl } from "@util/tools";
import Ajax from "@src/service";
import { ITopic } from "@src/types";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";

interface IMyProps {
  loginname: string;
}

const My: FC<IMyProps> = ({ loginname }) => {


  const { data, loading } = useURLLoader(
    "getDetails",
    JSON.stringify({ id: getUrl("id") })
  );

  let history = useHistory();
  const [details, setDetails] = useState<any>({});

  const getDetails = useCallback((loginname: string) => {
    Ajax.user({
      loginname: loginname,
    }).then((res) => {
      if (res.success) {
        setDetails(res.data);
      }
    });
  }, [])

  useEffect(() => {
    const loginname = getUrl("loginname");
    if (!loginname) {
      history.push("/login");
    } else {
      getDetails(loginname)
    }
  }, [history, getDetails]);

  const jump = (id: string, path: "details" | "my") => {
    history.push(`${path}?${path === "details" ? "id" : "loginname"}=${id}`);
    if(path === 'my') {
      getDetails(id)
    }
  };

  return (
    <div className="sz-my">
      <div className="sz-my__header">
        <div className="avatar">
          <img src={details.avatar_url} alt={details.loginname} />
        </div>
        <div className="content">
          <div className="username">{details.loginname}</div>
          <div className="score">{details.score}</div>
        </div>
      </div>
      <div className="sz-my__body">
        {loginname === details.loginname ? (
          <div className="sz-box">
            <div className="sz-box__body">
              <List>
                <ListItem after={<span className="ued-mobile">&#xe6b1;</span>}>
                  <div>换肤</div>
                </ListItem>
                <ListItem after={<span className="ued-mobile">&#xe6b1;</span>}>
                  <div>退出</div>
                </ListItem>
              </List>
            </div>
          </div>
        ) : null}
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
                        <div
                          className="avatar"
                          onClick={() => jump(item.author.loginname, "my")}
                        >
                          <img
                            src={item.author.avatar_url}
                            alt={item.author.loginname}
                          />
                        </div>
                      }
                    >
                      <div onClick={() => jump(item.id, "details")}>
                        {item.title}
                      </div>
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
                        <div
                          className="avatar"
                          onClick={() => jump(item.author.loginname, "my")}
                        >
                          <img
                            src={item.author.avatar_url}
                            alt={item.author.loginname}
                          />
                        </div>
                      }
                    >
                      <div onClick={() => jump(item.id, "details")}>
                        {item.title}
                      </div>
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
  loginname: state.userInfo.loginname,
});

export default connect(mapStateToProps)(My);
