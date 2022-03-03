import { SAVE_DESTINATION } from "../actions/destinationActions";

const initialState = {
  destination: [],
  var: 'test',
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
      case SAVE_DESTINATION:
        return {
        ...state,
        destination: action.destination,
        }
    default:
       return state;
  }
};

export default reducer;


