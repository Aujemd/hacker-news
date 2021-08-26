//Constants
const url = "https://hn.algolia.com/api/v1/search_by_date?";

/**
 * getData
 * * Function to get posts from backend
 * @param framework Framework about what will be posts
 * @param page Page where the posts come from
 * @returns Promise with array of posts
 */
export const getData = (framework?: string, page: number = 0): Promise<any> => {
  const query =
    framework !== "" ? `query=${framework}&page=${page}` : `page=${page}`;

  return fetch(`${url}${query}`)
    .then((res) => res.json())
    .then((res) => {
      return {
        data: res.hits,
        count: res.nbHits,
      };
    });
};
