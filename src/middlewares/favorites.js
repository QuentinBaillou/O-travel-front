/* eslint-disable no-console */
import axiosInstance from 'src/axiosInstance';
import {
  GET_FAVORITES_DESTINATION, saveFavorites, SAVE_FAVORITES_DESTINATION, DELETE_FAVORITES,
} from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES_DESTINATION:
      axiosInstance
        .get('api/user/favoris/list', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveFavorites(response.data.destination));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;

    case SAVE_FAVORITES_DESTINATION:
      axiosInstance
        .post('api/user/favoris', {
          destination: action.destination,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;

    case DELETE_FAVORITES:
      axiosInstance
        .post('api/remove/favoris', {
          destination: action.destinations,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log('Then', response);
        })
        .catch((error) => {
          (console.log(error.response));
        });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default fetchFavorites;
