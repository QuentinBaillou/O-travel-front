/* eslint-disable no-console */
import {
  GET_FORM_ELEMENTS, setFormElements, SEND_DESTINATION_FORM,
  setDestinations,
} from 'src/actions/formActions';
import axiosInstance from 'src/axiosInstance';

const dataFetchingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      axiosInstance
        .get(`api/${action.field}`)
        .then((response) => {
          store.dispatch(setFormElements(action.field, response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;

    case SEND_DESTINATION_FORM: {
      const state = store.getState();
      axiosInstance
        .post('api/destinations/form', {
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
