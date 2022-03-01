import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import dataFetchingMiddleware from 'src/middlewares/dataFetching';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    dataFetchingMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
