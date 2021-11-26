import { useState, useEffect } from "react";
import Ajax from "../service";
import { Toast } from "@src/packages";

const useURLLoader = (requestName: string, params: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Ajax[requestName]) {
      setLoading(true);
      setError(false);
      Ajax[requestName](JSON.parse(params))
        .then((res) => {
          setLoading(false);
          setError(false);
          if (res.success) {
            setData(res.data);
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
  }, [params, requestName]);

  return {
      loading: loading,
      error: error,
      data: data
  }
};

export default useURLLoader;
