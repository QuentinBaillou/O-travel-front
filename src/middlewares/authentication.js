/* eslint-disable no-console */
import jwtDecode from 'jwt-decode';
import {
  LOGIN, GET_LAST_USER, LOGOUT, saveUserInfo, sendForm, savePreviousUser,
} from 'src/actions/authenticationActions';
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
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case GET_LAST_USER:
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const { username: email, firstname, lastname } = jwtDecode(token);
        store.dispatch(savePreviousUser(email, 'firstname', 'lastname'));
      }
      next(action);
      break;

    case LOGOUT:
      localStorage.removeItem('token');
      next(action);
      break;
    default:
      next(action);
  }
};

export default authenticationMiddleware;
