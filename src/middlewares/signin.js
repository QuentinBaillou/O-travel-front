import axiosInstance from 'src/axiosInstance';
import { CREATE_USER } from 'src/actions/signin';

const signInMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      const state = store.getState();
      axiosInstance
        .post('user/form', {
          email: state.signin.email,
          password: state.signin.password,
          firstname: state.signin.firstname,
          lastname: state.signin.lastname,
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
      break;
  };
}

<<<<<<< HEAD
export default authenticationMiddleware;

=======
export default signInMiddleware;
>>>>>>> Fix: fixing problems due to branch merge
