import React, { FC } from "react";
import { Input, List, ListItem, Button } from "../../packages/index";
import Logo from "@assets/images/logo.png";
import "./index.scss";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
    const submit = () => {
        alert(123)
    }
  return (
    <div className="sz-login">
      <div className="sz-login__header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="sz-login__body">
        <List>
          <ListItem>
            <Input placeholder="请输入用户名" />
          </ListItem>
          <ListItem>
            <Input type="password" placeholder="请输入密码" />
          </ListItem>
          <ListItem>
            <Button
            color="primary"
            block
            onClick={submit}
            >
              登录
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Login;
