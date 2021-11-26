import React, { useState, useEffect } from "react";
import Ajax from "../service";
import { Toast } from "@src/packages";

const useURLLoader = (requestName: string, params: any, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Ajax[requestName]) {
      setLoading(true);
      setError(false);
      Ajax[requestName](params)
        .then((res) => {
          setLoading(false);
          setError(false);
          if (res.success) {
            setData(res);
          }
        })
        .catch(() => {
          setLoading(false);
          setError(true);
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
