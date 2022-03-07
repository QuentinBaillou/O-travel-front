/* eslint-disable no-console */
import { LOGIN, saveUserInfo, sendForm } from 'src/actions/authenticationActions';
import axiosInstance from 'src/axiosInstance';

const authenticationMiddleware = (store) => (next) => (action) => {
  const authenticationState = store.getState().authentication;
  switch (action.type) {
    case LOGIN: {
      const { email, password } = authenticationState;
      axiosInstance
        .post('user/login', {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          const { firstname, lastname } = response.data[0];
          store.dispatch(saveUserInfo(firstname, lastname));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(sendForm(true));
        });
      axiosInstance
        .post('login_check', {
          username: email,
          password,
        })
        .then((response) => {
          console.log(response);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authenticationMiddleware;
