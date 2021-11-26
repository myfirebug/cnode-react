import React, { FC } from "react";

export interface IReplyProps {
  id: string;
  content: string;
  create_at: string;
  is_uped: boolean;
  reply_id: any;
  author: {
    loginname: string;
    avatar_url: string;
  };
  ups: string[];
  index: number;
}

const Reply: FC<IReplyProps> = ({
  id,
  content,
  create_at,
  is_uped,
  reply_id,
  author,
  ups,
  index
}) => {
  const { loginname, avatar_url } = author;
  return (
    <div className="sz-replay__item">
      <div className="sz-replay__item--header">
        <div className="avatar">
          <img src={avatar_url} alt={loginname} />
        </div>
        <div className="username">{loginname}</div>
      </div>
      <div
        className="sz-replay__item--body"
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      ></div>
    </div>
  );
};

export default Reply;
