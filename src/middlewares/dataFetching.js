import axios from 'axios';
import { GET_FORM_ELEMENTS, setFormElements } from 'src/actions/formActions';

const dataFetchingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      axios
        .get(`http://cedric-vandermaes.vpnuser.lan:8080/api/${action.field}`)
        .then((response) => {
          store.useDispatch(setFormElements(action.field, response.data));
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

export default dataFetchingMiddleware;
