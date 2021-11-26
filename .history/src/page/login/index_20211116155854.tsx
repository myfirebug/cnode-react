import React, { FC } from "react";
import { Input } from "@src/packages";
import "./index.scss";
import { Link } from "react-router-dom";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
  return (
    <div className="sz-login">
      <div className="sz-login__bg">
        <div className="background"></div>
        <div className="sz-login__wrapper">
          <div className="sz-login__header">
            <Link to="/home">随便逛逛</Link>
            <h1>欢迎登录振兴号</h1>
          </div>
          <div className="sz-login__form">
            <div className="sz-login__item">
              <Input placeholder="请输入账号" />
            </div>
            <div className="sz-login__item">
              <Input placeholder="请输入密码" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
