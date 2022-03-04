import { SAVE_DESTINATION, SET_FLAG1, SET_FLAG2, SET_FLAG3 } from "../actions/destinationActions";

const initialState = {
  destination: [],
  flag1: '',
  flag2: '',
  flag3: '',
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
      case SAVE_DESTINATION:
        return {
        ...state,
        destination: action.destination,
        };
      case SET_FLAG1:
        return {
          ...state,
          flag1: action.flag1, 
        };
      case SET_FLAG2:
        return {
          ...state,
          flag2: action.flag2, 
        };
      case SET_FLAG3:
        return {
          ...state,
          flag3: action.flag3, 
        };
    default:
       return state;
  }
};

export default reducer;


