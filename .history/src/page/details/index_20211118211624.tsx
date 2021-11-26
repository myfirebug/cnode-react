import React, { FC, useState, useEffect } from "react";
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
          image={{
            show: false,
            height: 80,
          }}
        />
      ) : (
        <div className="sz-details">
          <div className="sz-details__header">
            <h1 className="title">{data.data.title}</h1>
          </div>
          <div className="sz-details__body"></div>
        </div>
      )}
    </>
  );
};

export default Details;
