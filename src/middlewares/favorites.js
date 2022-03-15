/* eslint-disable no-console */
import axiosInstance from 'src/axiosInstance';
import {
  GET_FAVORITES_DESTINATION, saveFavorites, SAVE_FAVORITES_DESTINATION, DELETE_FAVORITE,
  DELETE_PROFIL,
  saveNewFavorites,
} from 'src/actions/favoritesActions';
import { logout } from 'src/actions/userActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES_DESTINATION: {
      const token = localStorage.getItem('token');
      axiosInstance
        .get('api/user/favoris/list', {
          headers: {
            Authorization: `Bearer ${token}`,
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
    }
    case SAVE_FAVORITES_DESTINATION: {
      const { token } = store.getState().user;
      axiosInstance
        .post('api/user/favoris', {
          destination: action.destination,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;
    }
    case DELETE_FAVORITE: {
      const { token } = store.getState().user;
      axiosInstance
        .post('api/remove/favoris', {
          destination: action.destination,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          const { destinations } = store.getState().favorites;
          const newDestinations = destinations.filter(
            (destination) => destination.id !== action.destination,
          );
          store.dispatch(saveNewFavorites(newDestinations));
        })
        .catch((error) => {
          (console.log(error.response));
        });
      next(action);
      break;
    }
    case DELETE_PROFIL: {
      const { token } = store.getState().user;
      axiosInstance
        .get('api/user/remove/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Then', response);
          store.dispatch(logout());
        })
        .catch((error) => {
          (console.log(error.response));
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default fetchFavorites;
