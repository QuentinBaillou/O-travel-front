/* eslint-disable no-console */
// http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/destinations/list
// http://cedric-vandermaes.vpnuser.lan/projet-23-o-travel-back/public/;

import { GET_DESTINATION, saveDestination } from 'src/actions/destinationActions';
import axiosInstance from 'src/axiosInstance';

const fetchDestinations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATION:
      axiosInstance.get(`api/destinations/${action.destinationId}`)
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
