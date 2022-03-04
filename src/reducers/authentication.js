import { SET_FORM_FIELD } from 'src/actions/authentication';

const initialState = {
  fistname: '',
  lastname: '',
  password: '',
  email: '',
  isUserLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
