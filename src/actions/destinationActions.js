export const GET_DESTINATIONS = 'GET_DESTINATIONS';

export const getDestinations = () => ({
  type: GET_DESTINATIONS,
});

export const SAVE_DESTINATIONS = 'SAVE_DESTINATIONS';

export const saveDestinations = (destinations) => ({
  type: SAVE_DESTINATIONS,
  destinations,
});
