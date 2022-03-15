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

// ACTION TYPE DELETE_FAVORITE
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
// ACTION CREATOR deleteFavorite
export const deleteFavorite = (destination) => ({
  type: DELETE_FAVORITE,
  destination,
});

// ACTION TYPE DELETE_PROFIL
export const DELETE_PROFIL = 'DELETE_PROFIL';
// ACTION CREATOR deleteProfil
export const deleteProfil = (destination) => ({
  type: DELETE_PROFIL,
  destination,
});
