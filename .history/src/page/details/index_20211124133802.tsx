import React, { FC } from "react";
import { getUrl, timeAgo } from "../../util/tools";
import useURLLoader from "@src/hook/useURLLoader";
import { Skeleton } from "@src/packages";
import Reply, { IReplyProps } from "./components/reply";
import "./index.scss";

const Details: FC = () => {
  const { data, loading } = useURLLoader(
    "getDetails",
    JSON.stringify({ id: getUrl("id") })
  );

  return (
    <>
      {loading ? (
        <Skeleton
          image={{
            show: false,
            height: 80,
          }}
        />
      ) : (
        <div className="sz-details">
          <div className="sz-details__header">
            <h1 className="title">{data.title}</h1>
            <p className="info">
              <span>发布于{timeAgo(data.create_at)}</span>
              <span>
                作者
                {data.author ? data.author.loginname : ""}
              </span>
              <span>
                {data.visit_count}
                次浏览
              </span>
            </p>
          </div>
          <div
            className="sz-details__body"
            dangerouslySetInnerHTML={{ __html: `${data.content}` }}
          ></div>
          <div className="sz-reply">
            <div className="sz-reply__header"></div>
            <div className="sz-reply__list">
              {
                data.replies ?
                data.replies.map((item:IReplyProps) => (
                  <Reply {...item} key={item.id} />
                )) : null
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
