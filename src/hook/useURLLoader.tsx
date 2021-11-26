import { useState, useEffect } from "react";
import Ajax from "../service";

const useURLLoader = (requestName: string, params: string, isOverdue:boolean = false) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Ajax[requestName] && !isOverdue) {
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
    }
  }, [params, requestName, isOverdue]);

  return {
      loading: loading,
      error: error,
      data: data
  }
};

export default useURLLoader;
