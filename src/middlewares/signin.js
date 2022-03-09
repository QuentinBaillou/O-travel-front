/* eslint-disable no-console */
import axiosInstance from 'src/axiosInstance';
import { CREATE_USER } from 'src/actions/signin';
import { login } from 'src/actions/authenticationActions';

const signInMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState();
      axiosInstance
        .post('user/form', {
          firstname: state.signin.firstname,
          lastname: state.signin.lastname,
          email: state.signin.email,
          password: state.signin.password,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(login());
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default signInMiddleware;
