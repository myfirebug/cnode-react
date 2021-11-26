import React, { FC, useState } from "react";
import { Input, List, ListItem, Button } from "../../packages/index";
import Logo from "@assets/images/logo.svg";
import "./index.scss";
import Ajax from '@service/index'
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  const [params, setParams] = useState({
    username: "",
    password: "",
  });
  // 表单验证
  const formValidation = () => {
    return {};
  };

  // 表单提交
  const submit = () => {
    Ajax.login(params)
    .then(res => {
        console.log(res)
    })
  };
  return (
    <div className="sz-login">
      <div className="sz-login__header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="sz-login__body">
        <List>
          <ListItem>
            <Input
              onChange={(e) =>
                setParams((state) => ({ ...state, username: e.target.value }))
              }
              placeholder="请输入用户名"
            />
          </ListItem>
          <ListItem>
            <Input
              onChange={(e) =>
                setParams((state) => ({ ...state, password: e.target.value }))
              }
              type="password"
              placeholder="请输入密码"
            />
          </ListItem>
          <ListItem>
            <Button color="primary" block onClick={submit}>
              登录
            </Button>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Login;
