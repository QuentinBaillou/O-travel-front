import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import formMiddleware from 'src/middlewares/form';
import destinationMiddleware from 'src/middlewares/destination';
import listMiddleware from 'src/middlewares/list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    formMiddleware,
    destinationMiddleware,
    listMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
