import {
  SET_FORM_FIELD, LOGOUT, SAVE_USER_INFO,
  SEND_FORM,
} from 'src/actions/authenticationActions';

const initialState = {
  firstname: '',
  lastname: '',
  password: 'user',
  email: 'user@user.com',
  isUserLogged: false,
  isFormSend: false,
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
      };

    case SEND_FORM:
      return {
        ...state,
        isFormSend: action.state,
      };

    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
