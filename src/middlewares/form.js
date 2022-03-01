import axios from 'axios';
import { GET_FORM_ELEMENTS, setFormElements, SEND_FORM } from 'src/actions/formActions';

const dataFetchingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      axios
        .get(`http://cedric-vandermaes.vpnuser.lan:8080/api/${action.field}`)
        .then((response) => {
          store.dispatch(setFormElements(action.field, response.data));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;
    case SEND_FORM: {
      const state = store.getState();
      axios
        .post('http://cedric-vandermaes.vpnuser.lan:8080/api/destinations/form', {
          landscapes: state.form.landscapes,
          transports: state.form.transports,
          seasons: state.form.seasons,
          budget: state.form.budget,
        })
        .then((response) => {
          console.log(response);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default dataFetchingMiddleware;
