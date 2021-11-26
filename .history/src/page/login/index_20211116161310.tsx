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
            <Link to="/home" className="return">随便逛逛</Link>
            <h1 className="title">欢迎登录振兴号</h1>
          </div>
          <div className="sz-login__form">
            <div className="sz-login__item">
              <span className="sz-icon">&#xe6f1;</span>
              <Input placeholder="请输入手机号码" />
            </div>
            <div className="sz-login__item">
              <span className="sz-icon">&#xe6f0;</span>
              <Input placeholder="请输入密码" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
