import React, { useEffect, useState } from "react";
import Ajax from "../../service";
import Tab from "./components/tab";

const Home: React.FC = () => {
  const [params, setParams] = useState({
    page: 1,
    tab: "",
    limit: 10,
  });
  useEffect(() => {
    Ajax.getTopics({
      page: params.page,
      tab: params.tab,
      limit: params.limit,
    }).then((res) => {
      if (res.success) {
        console.log(res.data);
      }
    });
  }, [params.page, params.tab, params.limit]);
  return (
    <div>
      <Tab />
    </div>
  );
};

export default Home;
