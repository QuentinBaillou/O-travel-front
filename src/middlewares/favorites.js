import axiosInstance from 'src/axiosInstance';
import { GET_FAVORITES_DESTINATION, saveFavoritesDestination, SAVE_FAVORITES_DESTINATION } from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES_DESTINATION:
      axiosInstance
        .get('user/favoris')
        .then((response) => {
          store.dispatch(saveFavoritesDestination(response.data));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;

    case SAVE_FAVORITES_DESTINATION:
      axiosInstance
        .post('user/favoris', {
          destination: action.destination,
        }, {
          header: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default fetchFavorites;
