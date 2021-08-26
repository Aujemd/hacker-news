const url = "https://hn.algolia.com/api/v1/search_by_date?";

export const getData = (framework?: string, page: number = 0): Promise<any> => {
  const query =
    framework !== "" ? `query=${framework}&page=${page}` : `page=${page}`;

  return fetch(`${url}${query}`)
    .then((res) => res.json())
    .then((res) => res.hits);
};
