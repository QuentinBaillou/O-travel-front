// ACTION TYPE GET_FAVORITES_DESTINATIONS
export const GET_FAVORITES_DESTINATIONS = 'GET_FAVORITES_DESTINATIONS';
// ACTION CREATOR getFavoritesDestinations
export const getFavoritesDestinations = () => ({
  type: GET_FAVORITES_DESTINATIONS,
});

// ACTION TYPE SAVE_FAVORITES_DESTINATIONS
export const SAVE_FAVORITES_DESTINATIONS = 'SAVE_FAVORITES_DESTINATIONS';
// ACTION CREATOR saveFavoritesDestinations
export const saveFavoritesDestinations = (destinations) => ({
  type: SAVE_FAVORITES_DESTINATIONS,
  destinations,
});
