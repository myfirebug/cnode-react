import React, { FC } from "react";
import { getUrl, fmtDate } from "../../util/tools";
import useURLLoader from "@src/hook/useURLLoader";
import { Skeleton } from "@src/packages";

const Details: FC = () => {
  const { data, loading } = useURLLoader(
    "getDetails",
    JSON.stringify({ id: getUrl("id") })
  );

  return (
    <>
      {loading ? (
        <Skeleton
          image={{}}
        />
      ) : (
        <div className="sz-details">
          <div className="sz-details__header">
            <h1 className="title">{data.title || getUrl("title")}</h1>
            <div className="info">
              <span>
                <i className="ued-mobile">&#xe666;</i>
                {data.reply_count || ""}
              </span>
              <span>
                <i className="ued-mobile">&#xe637;</i>
                {data.visit_count || ""}
              </span>
              <span>
                <i className="ued-mobile">&#xe78b;</i>
                {fmtDate(data.last_reply_at, "yyyy-MM-dd hh:ss:mm") || ""}
              </span>
            </div>
          </div>
          <div className="sz-details__body"></div>
        </div>
      )}
    </>
  );
};

export default Details;
