// ACTION TYPE GET_DESTINATIONS
export const GET_DESTINATIONS = 'GET_DESTINATIONS';
// ACTION CREATOR getDestinations
export const getDestinations = () => ({
  type: GET_DESTINATIONS,
});

// ACTION TYPE SAVE_DESTINATIONS
export const SAVE_DESTINATIONS = 'SAVE_DESTINATIONS';
// ACTION CREATOR saveDestinations
export const saveDestinations = (destinations) => ({
  type: SAVE_DESTINATIONS,
  destinations,
});
