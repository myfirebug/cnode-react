import React, { FC } from "react";
import { Input, List, ListItem, Button } from "../../packages/index";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  return (
    <div className="ds-login">
      <div className="ds-login__header"></div>
      <div className="sz-login__body">
        <List>
          <ListItem>
            <Input placeholder="请输入用户名" />
          </ListItem>
          <ListItem>
            <Input type="password" placeholder="请输入密码" />
          </ListItem>
          <ListItem>
            <Button>登录</Button>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Login;
