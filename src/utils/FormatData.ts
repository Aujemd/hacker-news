const cleanData = (data: Array<any>) => {
  return data.filter(
    ({ author, story_title, story_url, created_at }) =>
      author !== null &&
      story_title &&
      story_url !== null &&
      created_at !== null
  );
};

export const formatData = (data: Array<any>) => {
  const cleanArray = cleanData(data);

  return cleanArray.map(({ author, story_title, story_url, created_at }) => {
    return {
      author,
      story_title,
      story_url,
      created_at,
    };
  });
};
