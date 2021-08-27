//React
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
  //Local States
  const [data, setData] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  /**
   * fetchData
   * * Function to request from backend the data
   */
  const fetchData = async () => {
    setError(false);
    try {
      const { data, count } = await getData(framework, page);
      const cleanResponse = formatData(data);

      setData((prevData) => {
        return [...prevData, ...cleanResponse];
      });
      setHasMore(count);
    } catch (error) {
      setError(true);
      setLoading(false);
    }

    setLoading(false);
  };

  const memoizedData = useCallback(fetchData, [framework, page]);

  //Component livecycle
  useEffect(() => {
    setData((prevData) => {
      return [];
    });
  }, [framework]);

  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  return { data, loading, error, hasMore };
};
