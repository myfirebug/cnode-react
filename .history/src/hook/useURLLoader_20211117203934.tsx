import React, { useState, useEffect } from "react";
import Ajax from "../service";
import { Toast } from "@src/packages";

const useURLLoader = (requestName: string, params: any, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [add, setAdd] = useState(false)
  useEffect(() => {
    if (Ajax[requestName]) {
      setLoading(true);
      setError(false);
      setAdd(false)
      Ajax[requestName](params)
        .then((res) => {
          setLoading(false);
          setError(false);
          setAdd(true)
          if (res.success) {
            setData(JSON.stringify(res));
          }
        })
        .catch(() => {
          setLoading(false);
          setError(true);
          setAdd(false)
        });
    } else {
      Toast({
        type: "html",
        content: `${requestName}在../service/index.tsx中未找到`,
      });
    }
  }, deps);

  return {
      loading: loading,
      error: error,
      data: data
  }
};

export default useURLLoader;
