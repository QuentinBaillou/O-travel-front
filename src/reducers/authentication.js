import { SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME } from "../actions/authentication";

const initialState = {
  fistname: '',
  lastname: '',
  password: '',
  email: '',
  submitted: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD:
    return {
      ...state,
      password: action.password,
    };
    case SET_FIRSTNAME:
    return {
      ...state,
      firstname: action.firstname,
    };
    case SET_LASTNAME:
    return {
      ...state,
      lastname: action.lastname,
    };
    default:
      return state;
  }
};

export default reducer;
