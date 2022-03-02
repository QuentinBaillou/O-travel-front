import axios from 'axios';
import { GET_DESTINATIONS } from 'src/actions/destinationActions';

const fetchDestinations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      axios.get(`http://cedric-vandermaes.vpnuser.lan:8080/api/`)
         .then((response) => {
           console.log(response.data);
           //store.dispatch();
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
