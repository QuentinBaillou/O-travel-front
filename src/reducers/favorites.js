import { SAVE_FAVORITES_DESTINATION } from '../actions/favoritesActions';

const initialState = {
  destinations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORITES_DESTINATION:
      return {
        ...state,
        destinations: action.destinations,
      };
    default:
      return state;
  }
};

export default reducer;
