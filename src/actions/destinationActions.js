export const GET_DESTINATION = 'GET_DESTINATION';

export const getDestination = (destinationId) => ({
  type: GET_DESTINATION,
  destinationId,
});

export const SAVE_DESTINATION = 'SAVE_DESTINATION';

export const saveDestination = (destination) => ({
  type: SAVE_DESTINATION,
  destination,
});

// FLAGS
export const SET_FLAG1 = 'SET_FLAG1';

export const setFlag1 = (flag1) => ({
  type: SET_FLAG1,
  flag1,
});

export const SET_FLAG2 = 'SET_FLAG2';

export const setFlag2 = (flag2) => ({
  type: SET_FLAG2,
  flag2,
});

export const SET_FLAG3 = 'SET_FLAG3';

export const setFlag3 = (flag3) => ({
  type: SET_FLAG3,
  flag3,
});
// FLAGS
