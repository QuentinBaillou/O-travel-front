import {
  // eslint-disable-next-line max-len
  SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME, SET_SUBMITTED, EMPTY_FIELD_ERROR, FIRSTNAME_ERROR, LASTNAME_ERROR,
} from 'src/actions/signin';

const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  submitted: null,
  emptyFieldError: null,
  firstnameError: null,
  lastnameError: null,
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
    case EMPTY_FIELD_ERROR:
      return {
        ...state,
        emptyFieldError: action.emptyFieldError,
      };
    case FIRSTNAME_ERROR:
      return {
        ...state,
        firstnameError: action.firstnameError,
      };
    case LASTNAME_ERROR:
      return {
        ...state,
        lastnameError: action.lastnameError,
      };
    default:
      return state;
  }
};

export default reducer;
