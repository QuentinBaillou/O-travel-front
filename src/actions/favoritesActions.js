// ACTION TYPE GET_FAVORITES_DESTINATION
export const GET_FAVORITES_DESTINATION = 'GET_FAVORITES_DESTINATION';
// ACTION CREATOR getFavoritesDestination
export const getFavoritesDestination = () => ({
  type: GET_FAVORITES_DESTINATION,
});

// ACTION TYPE SAVE_FAVORITES_DESTINATION
export const SAVE_FAVORITES_DESTINATION = 'SAVE_FAVORITES_DESTINATION';
// ACTION CREATOR saveFavoritesDestination
export const saveFavoritesDestination = (destination) => ({
  type: SAVE_FAVORITES_DESTINATION,
  destination,
});

// ACTION TYPE SAVE_FAVORITES
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
// ACTION CREATOR saveFavorites
export const saveFavorites = (destinations) => ({
  type: SAVE_FAVORITES,
  destinations,
});

// ACTION TYPE DELETE_FAVORITES
export const DELETE_FAVORITES = 'DELETE_FAVORITES';
// ACTION CREATOR deleteFavorites
export const deleteFavorites = (destination) => ({
  type: DELETE_FAVORITES,
  destination,
});
