import React, { FC, useState } from "react";
import { Input, Button, List, ListItem, Toast } from "@src/packages";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";
import { getUserInfo } from "@store/actions/userInfo";
import { Redirect } from "react-router-dom";
import { getUrl } from "@util/tools";
import { Link } from "react-router-dom";
import "./index.scss";
interface ILoginProps {
  token: string;
  getUserInfo: (token: string) => void;
}

const Login: FC<ILoginProps> = ({ token, getUserInfo }) => {
  // 获取返回的url地址
  const redirect = getUrl("redirect")
    ? getUrl("redirect").replace("____", "?")
    : "";

  const [accesstoken, setAccesstoken] = useState<any>("");
  const login = () => {
    if (!accesstoken) {
      Toast({
        type: "html",
        content: "请输入accessToken",
      });
      return;
    }
    getUserInfo(accesstoken);
  };
  return (
    <>
      {token ? (
        <Redirect
          to={redirect && redirect.indexOf("http") !== 0 ? redirect : "/home"}
        />
      ) : (
        <div className="sz-login">
          <List>
            <ListItem>
              <p>欢迎来到CODE社会</p>
            </ListItem>
            <ListItem>
              <Input
                placeholder="请输入accessToken"
                onChange={(e) => setAccesstoken(e.target.value)}
              />
            </ListItem>
            <ListItem>
              <>
                <Button block color="primary" onClick={login}>
                  登录
                </Button>
                <Link to="/home" className="go">
                  去首页
                </Link>
              </>
            </ListItem>
          </List>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.userInfo.token,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
