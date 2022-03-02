import { combineReducers } from 'redux';
import destinationReducer from './destination';

import formReducer from './form';

const rootReducer = combineReducers({
  form: formReducer, destination: destinationReducer,
});

export default rootReducer;
