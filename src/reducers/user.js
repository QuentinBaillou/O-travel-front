import {
  SET_FORM_FIELD, LOGOUT, SAVE_USER_INFO,
  SET_ERROR,
} from 'src/actions/userActions';

const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  isUserLogged: false,
  errorMessage: '',
  errorState: false,
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
      };

    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorState: action.state,
      };

    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
