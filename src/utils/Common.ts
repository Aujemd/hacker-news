/**
 * ID
 * @returns UNIQUE ID STRING
 */

export const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
