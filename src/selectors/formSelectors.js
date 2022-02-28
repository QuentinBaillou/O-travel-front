/* eslint-disable import/prefer-default-export */
export const landscapesSelector = (landscapes, landscapeName) => {
  console.log(landscapes);
  const searchedLandscape = landscapes.find((element) => element.name === landscapeName);
  const landscapesReturning = landscapes.map((landscape) => {
    if (landscape === searchedLandscape) {
      if (landscape.checked) {
        return { ...landscape, checked: !landscape.checked };
      }
      return { ...landscape, checked: true };
    }
    return landscape;
  });

  return landscapesReturning;
};
