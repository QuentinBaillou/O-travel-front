import axiosInstance from 'src/axiosInstance';
import { GET_DESTINATIONS, saveDestinations } from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      axiosInstance
        .get('destinations/Profile')
        .then((response) => {
          store.dispatch(saveDestinations(response.data));
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
