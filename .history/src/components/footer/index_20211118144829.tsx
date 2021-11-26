import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Footer: FC = () => {
  const [navList] = useState([
    {
      icon: "&#xe729;",
      name: "首页",
      path: "/home",
    },
    {
      icon: "&#xe68a;",
      name: "消息",
      path: "/message",
    },
    {
      icon: "&#xe6a1;",
      name: "我的",
      path: "/my",
    },
  ]);
  return (
    <div className="sz-footer">
      <ul className="sz-nav">
        {navList.map((item, index) => (
          <li className="sz-nav__item" key={index}>
            <Link
              to={{
                pathname: item.path,
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

export default Footer;
