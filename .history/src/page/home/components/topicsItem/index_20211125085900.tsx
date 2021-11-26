import React, { useMemo, memo } from "react";
import { ITopic } from "@src/types";
import { timeAgo } from "@src/util/tools";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./index.scss";

const TopicsItem = memo((props: ITopic) => {
  const {
    title,
    reply_count,
    visit_count,
    author,
    top,
    create_at,
    good,
    tab,
    id,
  } = props;

  let history = useHistory();

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
      <div className="sz-topics__header" onClick= {() => history.push(`/my?loginname=${author.loginname}`)}>
        <div className="user-avatar">
          <img src={author.avatar_url} alt={author.loginname} />
        </div>
        <div className="user-info">
          <p className="user-name">{author.loginname}</p>
          <p className="create-at">{create_at ? timeAgo(create_at) : ""}</p>
        </div>
      </div>
      <Link to={`/details?id=${id}`} className="sz-topics__body">
        {getLabel ? <span className="put-top">{getLabel}</span> : null}
        {title}
      </Link>
      <div className="sz-topics__footer">
        <span>
          <i className="ued-mobile">&#xe666;</i>
          {reply_count}
        </span>
        <span>
          <i className="ued-mobile">&#xe637;</i>
          {visit_count}
        </span>
      </div>
    </div>
  );
});

export default TopicsItem;
