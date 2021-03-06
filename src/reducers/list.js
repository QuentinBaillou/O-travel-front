import { SAVE_DESTINATIONS } from '../actions/listActions';

const initialState = {
  destinations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DESTINATIONS:
      return {
        ...state,
        destinations: action.destinations,
      };
    default:
      return state;
  }
};

export default reducer;
