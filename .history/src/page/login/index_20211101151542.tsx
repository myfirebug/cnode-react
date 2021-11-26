import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Input } from "@components/index";

const Login: React.FC = (props) => {
  // true:短信验证码登录, false: 密码登录
  const [switchType, setSwitchType] = useState<boolean>(false);
  // 登录信息
  const [params, setParams] = useState({
    phone: '',
    password: ''
  })

  // 更新登录信息
  const changeHanlder = useCallback((value, field) => {
    setParams(state => ({
      ...state,
      [field]: value
    }), [])
  }, [setParams])
  return (
    <div className="sz-login">
      <div className="sz-login__body">
        <div className="sz-login__background"></div>
        <div className="sz-login__form">
          <div className="sz-login__form--header">
            <Link to="/home" className="return">
              随便逛逛
            </Link>
            <h1 className="title">欢迎登录振兴号</h1>
          </div>
          <div className="sz-login__form--body">
            {switchType ? (
              <>
                <Input
                  placeholder="请输入手机号码"
                  onChange={(e) => changeHanlder(e.target.value, 'phone')}
                  isRadius={true}
                  type="number"
                  after={<span className="sz-icon">&#xe6f1;</span>}
                  before={<span className="get-code">获取验证码</span>}
                />
                <Input
                  placeholder="请输入验证码"
                  onChange={(e) => console.log(e.target.value)}
                  isRadius={true}
                  after={<span className="sz-icon">&#xe6f0;</span>}
                />
              </>
            ) : (
              <>
                <Input
                  placeholder="请输入用户名"
                  onChange={(e) => console.log(e.target.value)}
                  isRadius={true}
                  after={<span className="sz-icon">&#xe6f1;</span>}
                />
                <Input
                  type="password"
                  placeholder="请输入密码"
                  onChange={(e) => console.log(e.target.value)}
                  isRadius={true}
                  after={<span className="sz-icon">&#xe6f0;</span>}
                />
              </>
            )}
            <button className="submit">登录</button>
            <div
              onClick={() => setSwitchType(!switchType)}
              className="sz-login__form--switch"
            >
              {!switchType ? "短信验证码登录" : "密码登录"}
            </div>
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
