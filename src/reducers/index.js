import { combineReducers } from 'redux';
import destinationReducer from './destination';
import listReducer from './list';
import formReducer from './form';

const rootReducer = combineReducers({
  form: formReducer, destination: destinationReducer, list: listReducer,
});

export default rootReducer;
