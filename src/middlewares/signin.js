import axiosInstance from 'src/axiosInstance';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      const state = store.getState();
      axiosInstance
        .post('user/form', {
          email: state.authentication.email,
          password: state.authentication.password,
          firstname: state.authentication.firstname,
          lastname: state.authentication.lastname,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          (console.log(error))
        });
      next(action);
      break;
    }
    default:
      next(action);
  };

export default authenticationMiddleware;
