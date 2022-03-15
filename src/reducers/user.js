import {
  SET_FORM_FIELD, LOGOUT, SAVE_USER_INFO,
  SET_FORM_ERROR, SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME, SET_SUBMITTED,
} from 'src/actions/userActions';

const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  isUserLogged: false,
  errorMessage: '',
  errorState: false,
  submitted: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        email: action.email,
        firstname: action.firstname,
        lastname: action.lastname,
        password: '',
        isUserLogged: true,
        errorMessage: '',
        errorState: false,
        token: action.token,
      };

    case SET_FORM_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorState: action.state,
      };

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
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
