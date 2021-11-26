import React, { FC, useState } from "react";
import "./index.scss";
import classNames from "classnames";
export interface ITabProps {
  tab: "ask" | "share" | "job" | "good" | "dev";
}

const Tab: FC<ITabProps> = ({ tab }) => {
  const [data] = useState([
    {
      name: "全部",
      value: "",
    },
    {
      name: "问答",
      value: "ask",
    },
    {
      name: "分享",
      value: "share",
    },
    {
      name: "招聘",
      value: "job",
    },
    {
      name: "精华",
      value: "good",
    },
    {
      name: "测试",
      value: "dev",
    },
  ]);
  return (
    <div className="sz-tab">
      {data.map((item) => (
        <div
          key={item.value}
          className={classNames("sz-tab__item", {
            "is-active": item.value === tab,
          })}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Tab;
