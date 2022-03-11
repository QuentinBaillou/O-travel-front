/* eslint-disable no-console */
import { GET_DESTINATIONS, saveDestinations } from 'src/actions/listActions';
import axiosInstance from 'src/axiosInstance';

const fetchList = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      axiosInstance
        .get('api/destinations/list')
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

export default fetchList;
