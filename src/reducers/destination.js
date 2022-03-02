import { SAVE_DESTINATIONS } from "../actions/destinationActions";

const initialState = {
  destinations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
      case SAVE_DESTINATIONS:
        return {
        ...state,
        destinatons: action.destinations,
        }
    default:
       return state;
  }
};

export default reducer;


