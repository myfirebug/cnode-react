import React, { FC } from "react";
import { timeAgo } from "@src/util/tools";
import { useHistory } from "react-router-dom";
import "./index.scss";

export interface IMessageItemProps {
  author: {
    avatar_url: string;
    loginname: string;
  };
  create_at: string;
  has_read: boolean;
  id: string;
  reply: {
    content: string;
    create_at: string;
    id: string;
    ups: string[];
  };
  topic: {
    id: string;
    last_reply_at: string;
    title: string;
  };
  type: string;
}

const MessageItem: FC<IMessageItemProps> = ({
    author,
    create_at,
    reply,
    topic
}) => {
    let history = useHistory();
  return (
    <div className="sz-message__item">
      <div className="sz-message__item--header">
          <div className="avatar">
              <img src={author.avatar_url} alt={author.loginname} />
          </div>
          <div className="content">
              <div className="loginname">{author.loginname}</div>
              <div className="create-at">{timeAgo(create_at)}</div>
          </div>
      </div>
      <div className="sz-message__item--body" dangerouslySetInnerHTML={{ __html: `${reply.content}` }}>
      </div>
      <div className="sz-message__item--footer">
        {topic.title}
      </div>
    </div>
  );
};

export default MessageItem;
