import {
  // eslint-disable-next-line max-len
  SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME, SET_SUBMITTED,
} from 'src/actions/signin';

const initialState = {
  firstname: '',
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
    case SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted,
      };
    default:
      return state;
  }
};

export default reducer;
