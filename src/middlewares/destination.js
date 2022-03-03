/* eslint-disable no-console */
// http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/destinations/list

import axios from 'axios';
import { GET_DESTINATION, saveDestination } from 'src/actions/destinationActions';

const fetchDestinations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATION:
      axios.get(`http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/destinations/${action.destinationId}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveDestination(response.data));
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

export default fetchDestinations;
