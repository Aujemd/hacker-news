const url = "https://hn.algolia.com/api/v1/search_by_date?";

export const getData = (framework?: string, page: number = 0): Promise<any> => {
  const query = framework ? `query=${framework}` : "";

  return fetch(`${url}${query}&page=${page}`)
    .then((res) => res.json())
    .then((res) => res.hits);
};
