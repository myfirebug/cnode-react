import React, { FC } from "react";
import { Input, Button, List, ListItem } from "@src/packages";
import "./index.scss";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  return (
    <div className="sz-login">
      <List>
        <ListItem>
          <p>欢迎来到CODE社会</p>
        </ListItem>
        <ListItem>
          <Input　placeholder="请输入accessToken" />
        </ListItem>
        <ListItem>
          <Button block color="primary">登录</Button>
        </ListItem>
      </List>
    </div>
  );
};

export default Login;
