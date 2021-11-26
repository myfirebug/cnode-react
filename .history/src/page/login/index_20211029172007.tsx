import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Input, {InputSizeType} from "@components/input";
console.log(InputSizeType['middle'])

const Login: React.FC = (props) => {
  return (
    <div className="sz-login">
      <div className="sz-login__body">
        <div className="sz-login__background"></div>
        <div className="sz_login__form">
          <div className="sz_login__form--header">
            <Link to="/home">随便逛逛</Link>
            <h1 className="title">欢迎登录</h1>
          </div>
          <div className="sz_login__form--body">
            <Input
              isRadius={true}
              after="after"
              placeholder="请输入用户名"
              onChange={(e) => console.log(e.target.value)}
              before="before"
            />
          </div>
        </div>
      </div>
      <div className="sz-login__footer">
        版权所有：成都中科大旗软件股份有限公司
      </div>
    </div>
  );
};

export default Login;
