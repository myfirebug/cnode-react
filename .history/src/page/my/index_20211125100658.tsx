import React, { FC, useEffect, useState } from "react";
import { List, ListItem, Skeleton } from "@src/packages";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { getUrl } from "@util/tools";
import { ITopic } from "@src/types";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";
import useURLLoader from "@src/hook/useURLLoader";
import Theme from './components/theme';

interface IMyProps {
  loginname: string;
}

const My: FC<IMyProps> = ({ loginname }) => {
  let history = useHistory();
  // 参数
  const [params, setParams] = useState({
    loginname: getUrl("loginname"),
  });
  // 数据
  const { data, loading } = useURLLoader("user", JSON.stringify(params));
  // 判断是否是登录的自己
  useEffect(() => {
    const loginname = getUrl("loginname");
    if (!loginname) {
      history.push("/login");
    }
  }, [history]);

  // 跳转
  const jump = (id: string, path: "details" | "my") => {
    history.push(`${path}?${path === "details" ? "id" : "loginname"}=${id}`);
    if (path === "my") {
      setParams({
        loginname: id,
      });
    }
  };
  // 换肤弹窗
  const [visible, setVisible] = useState(false);

  return (
    <>
      {loading ? (
        <Skeleton
          image={{
            show: true,
          }}
        />
      ) : (
        <div className="sz-my">
          <Theme visible={visible} setVisible={setVisible} />
          <div className="sz-my__header">
            <div className="avatar">
              <img src={data.avatar_url} alt={data.loginname} />
            </div>
            <div className="content">
              <div className="username">{data.loginname}</div>
              <div className="score">{data.score}</div>
            </div>
          </div>
          <div className="sz-my__body">
            {loginname === data.loginname ? (
              <div className="sz-box">
                <div className="sz-box__body">
                  <List>
                    <ListItem
                      onClick={() => alert(132)}
                      after={<span className="ued-mobile">&#xe6b1;</span>}
                    >
                      <div>换肤</div>
                    </ListItem>
                    <ListItem
                      after={<span className="ued-mobile">&#xe6b1;</span>}
                    >
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
                  {data.recent_topics
                    ? data.recent_topics.map((item: ITopic) => (
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
                  {data.recent_replies
                    ? data.recent_replies.map((item: ITopic) => (
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
      )}
    </>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  loginname: state.userInfo.loginname,
});

export default connect(mapStateToProps)(My);