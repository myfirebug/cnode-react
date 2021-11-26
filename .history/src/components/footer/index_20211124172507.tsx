import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ALL_STATE } from "@store/type";
import "./index.scss";

interface IFooterProps {
  loginname: string;
}
const Footer: FC<IFooterProps> = ({
  loginname
}) => {
  const [navList, setNavList] = useState([
    {
      icon: "&#xe729;",
      name: "首页",
      path: "/home",
      search: ""
    },
    {
      icon: "&#xe68a;",
      name: "消息",
      path: "/message",
      search: ""
    },
    {
      icon: "&#xe6a1;",
      name: "我的",
      path: "/my",
      search: ""
    },
  ]);

  useEffect(() => {
    if (loginname) {
      setNavList(state => {
        const newState = state.map((item, index) => ({
          ...item,
          search: index === 3 ? `loginname=${loginname}` : ''
        }))
        return newState
      })
    }
  }, [setNavList, loginname])

  return (
    <div className="sz-footer">
      <ul className="sz-nav">
        {navList.map((item, index) => (
          <li className="sz-nav__item" key={index}>
            <Link
              to={{
                pathname: item.path,
                search: item.search
              }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: `${item.icon}` }}
                className="ued-mobile"
              ></span>
              <span className="text">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  loginname: state.userInfo.loginname,
});

export default connect(mapStateToProps)(Footer);
