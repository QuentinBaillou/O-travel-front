/* eslint-disable import/prefer-default-export */
export const selectedItemArraySelector = (selectedArray, item) => {
  if (selectedArray.find((arrayItem) => arrayItem === item)) {
    return selectedArray.filter((arrayItem) => arrayItem !== item);
  }
  return [...selectedArray, item];
};
