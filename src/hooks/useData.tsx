//react
import { useState, useEffect, useCallback } from "react";

//Services
import { getData } from "../services/data.service";

//Utils
import { formatData } from "../utils/FormatData";

//types
export type Post = {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
  objectID: string;
};

export const useData = (framework: string, page: number = 0) => {
  const [data, setData] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fecthData = async () => {
    setLoading(true);
    try {
      const response = await getData(framework, page);
      const cleanResponse = formatData(response);
      setData(cleanResponse);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  const memoizedData = useCallback(fecthData, [framework, page]);

  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  return { data, loading, error };
};
