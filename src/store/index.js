import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import formMiddleware from 'src/middlewares/form';
import destinationMiddleware from 'src/middlewares/destination';
import listMiddleware from 'src/middlewares/list';
import userMiddleware from 'src/middlewares/user';
import favoritesMiddleware from 'src/middlewares/favorites';
import signInMiddleware from 'src/middlewares/signin';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    formMiddleware,
    listMiddleware,
    destinationMiddleware,
    userMiddleware,
    favoritesMiddleware,
    signInMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
