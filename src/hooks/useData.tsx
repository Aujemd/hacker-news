//react
import { useState, useEffect } from "react";

//Services
import { getData } from "../services/data.service";

//Utils
import { formatData } from "../utils/FormatData";

//types
type Post = {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
};

export const useData = (framework: string, page: number = 0) => {
  const [data, setData] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fecthData = async () => {
    setLoading(true);
    const response = await getData(framework, page);
    const cleanResponse = formatData(response);
    setData(cleanResponse);
    setLoading(false);
  };

  useEffect(() => {
    fecthData();
  }, [framework, page]);

  return [data, loading];
};
