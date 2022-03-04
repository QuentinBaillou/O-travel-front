/* eslint-disable no-console */
import { SEND_LOGIN_FORM } from 'src/actions/authentication';
import axiosInstance from 'src/axiosInstance';

const authenticationMiddleware = (store) => (next) => (action) => {
  const authenticationState = store.getState().authentication;
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      const { email, password } = authenticationState;
      axiosInstance
        .post('login', {
          email,
          password,
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authenticationMiddleware;
