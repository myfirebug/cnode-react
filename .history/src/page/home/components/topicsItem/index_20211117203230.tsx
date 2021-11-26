import React, { FC, useMemo } from "react";
import { timeAgo } from "@src/util/tools";
import "./index.scss";

export interface ITopicsItemProps {
  id: string;
  title: string;
  reply_count: number;
  visit_count: number;
  author: {
    avatar_url: string;
    loginname: string;
  };
  top: boolean;
  good: boolean;
  tab: "share" | "ask" | "job";
  create_at: string;
  [propNames: string]: any;
}

const TopicsItem: FC<ITopicsItemProps> = ({
  id,
  title,
  reply_count,
  visit_count,
  author,
  top,
  create_at,
  good,
  tab,
}) => {
  const getLabel = useMemo(() => {
    let str = "";
    if (good) {
      str = "精华";
    } else if (top) {
      str = "置顶";
    } else {
      switch (tab) {
        case "share":
          str = "分享";
          break;
        case "ask":
          str = "问答";
          break;
        case "job":
          str = "招聘";
          break;
        default:
          str = "暂无";
      }
    }
    return str;
  }, [good, tab, top]);
  return (
    <div className="sz-topics__item">
      <div className="sz-topics__header">
        <div className="user-avatar">
          <img src={author.avatar_url} alt={author.loginname} />
        </div>
        <div className="user-info">
          <p className="user-name">{author.loginname}</p>
          <p className="create-at">{timeAgo(create_at)}</p>
        </div>
      </div>
      <div className="sz-topics__body">
        {getLabel ? <span className="put-top">{getLabel}</span> : null}
        {title}
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
      </div>
      <div className="sz-topics__footer">
        {reply_count} {visit_count}
      </div>
    </div>
  );
};

export default TopicsItem;
