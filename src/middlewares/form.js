/* eslint-disable no-console */

import axios from 'axios';
import {
  GET_FORM_ELEMENTS, setFormElements, SEND_FORM,
  setDestinations,
} from 'src/actions/formActions';

const dataFetchingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      axios
        .get(`http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/${action.field}`)
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
        .post('http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/api/destinations/form', {
          selectedLandscapes: state.form.landscapesSelected,
          selectedTransports: state.form.transportsSelected,
          selectedSeasons: state.form.seasonsSelected,
          budget: state.form.budget,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setDestinations(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default dataFetchingMiddleware;
