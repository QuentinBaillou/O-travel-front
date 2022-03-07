import { SET_FORM_FIELD, LOGOUT, SAVE_USER_INFO } from 'src/actions/authenticationActions';

const initialState = {
  firstname: '',
  lastname: '',
  password: 'user',
  email: 'user@user.com',
  isUserLogged: false,
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
        firstname: action.firstname,
        lastname: action.lastname,
        isUserLogged: true,
      };

    case LOGOUT:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        isUserLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
