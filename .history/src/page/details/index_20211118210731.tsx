import React, { FC, useState, useEffect } from "react";
import { getUrl, fmtDate } from "../../util/tools";
import useURLLoader from "@src/hook/useURLLoader";
import { Skeleton } from "@src/packages";

const Details: FC = () => {
  const { data, loading } = useURLLoader(
    "getDetails",
    JSON.stringify({ id: getUrl("id") })
  );
  console.log(data, "datadata");
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
            <h1 className="title">{getUrl("title") || data.data.title}</h1>
            <div className="info">
              <span>
                <i className="ued-mobile">&#xe666;</i>
                {data.data.reply_count}
              </span>
              <span>
                <i className="ued-mobile">&#xe637;</i>
                {data.data.visit_count}
              </span>
              <span>
                <i className="ued-mobile">&#xe78b;</i>
                {fmtDate(
                  data.data.last_reply_at,
                  "yyyy-MM-dd hh:ss:mm"
                )}
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
