/* eslint-disable import/prefer-default-export */
/**
 * This selector search a item from array array based on its name,
 * and return a copy of array with searched item checked property toggle,
 * or added if it didn't exist
 * @param {array} array List of array in state
 * @param {string} itemName Name of the item to replace
 * @return arrayReturning array base array with searched item modified
 */
export const itemCheckedSelector = (array, itemName) => {
  // Find the item, base on its name
  const searchedItem = array.find((element) => element.name === itemName);

  const arrayReturning = array.map((item) => {
    // If searched item, then
    if (item === searchedItem) {
      // If property checked exists, then
      if (item.checked) {
        // Toggle it
        return { ...item, checked: !item.checked };
      }
      // Else add it
      return { ...item, checked: true };
    }
    // Else return item without doing anything
    return item;
  });

  return arrayReturning;
};
