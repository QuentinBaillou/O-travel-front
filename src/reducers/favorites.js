import { SAVE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
  destinations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        destinations: action.destinations,
      };
    default:
      return state;
  }
};

export default reducer;
