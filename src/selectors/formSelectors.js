/* eslint-disable import/prefer-default-export */
/**
 * This selector search a landscape from landscapes array based on its name,
 * and return a copy of landscapes with searched landscape checked property toggle,
 * or added if it didn't exist
 * @param {array} landscapes List of landscapes in state
 * @param {string} landscapeName Name of the landscape to replace
 * @return landscapesReturning landscapes base array with searched landscape modified
 */
export const landscapesSelector = (landscapes, landscapeName) => {
  // Find the landscape, base on its name
  const searchedLandscape = landscapes.find((element) => element.name === landscapeName);

  const landscapesReturning = landscapes.map((landscape) => {
    // If searched landscape, then
    if (landscape === searchedLandscape) {
      // If property checked exists, then
      if (landscape.checked) {
        // Toggle it
        return { ...landscape, checked: !landscape.checked };
      }
      // Else add it
      return { ...landscape, checked: true };
    }
    // Else return landscape without doing anything
    return landscape;
  });

  return landscapesReturning;
};
