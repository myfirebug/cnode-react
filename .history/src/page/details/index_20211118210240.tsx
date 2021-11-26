import React, { FC, useState, useEffect } from "react";
import Ajax from "../../service";
import { getUrl } from "../../util/tools";
import useURLLoader from "@src/hook/useURLLoader";

const Details: FC = () => {

  const {data, loading} = useURLLoader('getDetails', JSON.stringify({id: getUrl('id')}))
  console.log(data, 'datadata')
  return (
    <div className="sz-details">
      <div className="sz-details__header">
          <h1 className="title">{getUrl("title")}</h1>
      </div>
      <div className="sz-details__body"></div>
    </div>
  );
};

export default Details;
