/* eslint-disable import/prefer-default-export */
/**
 *
 * @param {array} selectedArray The array to search through
 * @param {*} item The item to search in the array
 * @returns {array} If array contain the item : the array without it
 * If array doesn't contain the item : the array with the item pushed
 */
export const selectedItemArraySelector = (selectedArray, item) => {
  if (selectedArray.find((arrayItem) => arrayItem.id === item.id)) {
    return selectedArray.filter((arrayItem) => arrayItem.id !== item.id);
  }
  return [...selectedArray, item];
};
