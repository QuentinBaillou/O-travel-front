/* eslint-disable no-console */
import axios from 'axios';
import { SEND_LOGIN_FORM } from 'src/actions/authentication';

const authenticationMiddleware = (store) => (next) => (action) => {
  const authenticationState = store.getState().authentication;
  switch (action.type) {
    case SEND_LOGIN_FORM: {
      const { email, password } = authenticationState;
      console.log(email);
      console.log(password);
      axios
        .post('http://cedric-vandermaes.vpnuser.lan/projet-23-o-travel-back/public/api/', {
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
