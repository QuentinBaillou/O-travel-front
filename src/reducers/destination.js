import { SAVE_DESTINATION, SET_FLAG } from "../actions/destinationActions";

const initialState = {
  destination: [],
  flag: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DESTINATION:
      return {
        ...state,
        destination: action.destination,
        };
      case SET_FLAG:
        return {
          ...state,
          flag: action.flag, 
        };
    default:
      return state;
  }
};

export default reducer;
