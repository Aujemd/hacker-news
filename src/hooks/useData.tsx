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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  /**
   * fetchData
   * * Function to request from backend the data
   */
  const fetchData = async () => {
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

  const memoizedData = useCallback(fetchData, [framework, page]);

  //Component livecycle
  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  return { data, loading, error };
};
