import React, { FC } from "react";
import { Input, List, ListItem, Button } from "../../packages/index";
import Logo from "@assets/images/logo.png";
import "./index.scss";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  return (
    <div className="sz-login">
      <div className="sz-login__header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="sz-login__body">
        <List>
          <ListItem after={<div className="sz-icon">123</div>}>
            <Input placeholder="请输入用户名" />
          </ListItem>
          <ListItem>
            <Input type="password" placeholder="请输入密码" />
          </ListItem>
          <ListItem>
            <Button color="primary" block>
              登录
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Login;
