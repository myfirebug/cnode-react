import React, { FC, useState, useEffect } from "react";
import Ajax from "../../service";
import { getUrl } from "../../util/tools";

const Details: FC = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Ajax.getDetails({
      id: getUrl("id"),
    }).then((res) => {
      if (res.success) {
        console.log(res);
      }
    });
  }, []);
  return (
    <div className="sz-details">
      <div className="sz-details__header"></div>
      <div className="sz-details__body"></div>
    </div>
  );
};

export default Details;
