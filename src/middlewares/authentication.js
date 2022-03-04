const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case :
      
      next(action);
      break;
    default:
      next(action);
  }
};

export default authenticationMiddleware;
