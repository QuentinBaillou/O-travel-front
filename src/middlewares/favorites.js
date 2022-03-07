import axios from 'axios';
import { GET_DESTINATIONS, saveDestinations } from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      axios
        .get('http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/destinations/Profile')
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
