import React, { FC, useState } from "react";
import "./index.scss";
import classNames from "classnames";

export type tabType = "" | "ask" | "share" | "job" | "good" | "dev";

interface ITabProps {
  tab: tabType;
  onChange: Function;
}

const Tab: FC<ITabProps> = ({ tab, onChange }) => {
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
          onClick={() => {
            window.scrollTo(0, 0);
            onChange((state: any) => ({
              ...state,
              tab: item.value,
              page: 1,
              update: new Date().getTime(),
            }));
          }}
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
