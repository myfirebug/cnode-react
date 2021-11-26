import React, { FC, useState } from "react";
import { Input, List, ListItem, Button } from "../../packages/index";
import Logo from "@assets/images/logo.svg";
import "./index.scss";
import Ajax from '@service/index'
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  const [params, setParams] = useState({
    token: ''
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
      </div>
      <div className="sz-login__body">
      </div>
    </div>
  );
};

export default Login;
