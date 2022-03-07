import axiosInstance from 'src/axiosInstance';
import { GET_FAVORITES_DESTINATIONS, saveFavoritesDestinations } from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES_DESTINATIONS:
      axiosInstance
        .get('user/favoris')
        .then((response) => {
          store.dispatch(saveFavoritesDestinations(response.data));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default fetchFavorites;
