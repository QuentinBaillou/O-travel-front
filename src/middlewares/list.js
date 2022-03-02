import axios from 'axios';
import { GET_DESTINATIONS, saveDestinations } from 'src/actions/listActions';

const fetchList = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      axios
        .get(`http://cedric-vandermaes.vpnuser.lan:8080/api/${action.field}`)
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
