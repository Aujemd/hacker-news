/**
 * cleanData
 * * Function to get Array of post without null fields
 * @param data Data from formatData function
 * @returns Clean data
 */

const cleanData = (data: Array<any>) => {
  return data.filter(
    ({ author, story_title, story_url, created_at, objectID }) =>
      author !== null &&
      story_title &&
      story_url !== null &&
      created_at !== null &&
      objectID !== null
  );
};

/**
 * formatData
 * * Function to format a Array of post to get only required information
 * @param data Data from Backend
 * @returns Formated data
 */
export const formatData = (data: Array<any>) => {
  const cleanArray = cleanData(data);

  return cleanArray.map(
    ({ author, story_title, story_url, created_at, objectID }) => {
      return {
        author,
        story_title,
        story_url,
        created_at,
        objectID,
      };
    }
  );
};
