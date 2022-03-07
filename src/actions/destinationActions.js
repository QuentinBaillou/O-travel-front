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

export const SET_FLAG = 'SET_FLAG';

export const setFlag = (flag) => ({
  type: SET_FLAG,
  flag,
});
