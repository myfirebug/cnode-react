import React, { FC, useState, useEffect } from "react";
import Ajax from "../../service";
import { getUrl } from "../../util/tools";

const Details: FC = () => {
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    Ajax.getDetails({
      id: getUrl("id"),
    }).then((res) => {
      if (res.success) {
        setDetails(res.data)
      }
    });
  }, []);
  return (
    <div className="sz-details">
      <div className="sz-details__header">
          <h1 className="title">{getUrl("title") || details.title}</h1>
      </div>
      <div className="sz-details__body"></div>
    </div>
  );
};

export default Details;
