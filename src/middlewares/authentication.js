import axiosInstance from 'src/axiosInstance';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER:
      axiosInstance
        .post('user/form')
        .then((response) => {
          console.log(response)})
        .catch((error) => {
          (console.log(error))
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default authenticationMiddleware;
