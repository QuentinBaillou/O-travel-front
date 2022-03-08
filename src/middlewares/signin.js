import axiosInstance from 'src/axiosInstance';
import { CREATE_USER } from 'src/actions/signin';

const signInMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
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
        })
        .catch((error) => {
          (console.log(error))
        });
      next(action);
      break;
    default:
      next(action);
  };
};

export default signInMiddleware;
