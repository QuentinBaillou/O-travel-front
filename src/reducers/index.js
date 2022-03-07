import { combineReducers } from 'redux';
import destinationReducer from './destination';
import listReducer from './list';
import formReducer from './form';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  form: formReducer, 
  destination: destinationReducer, 
  list: listReducer, 
  authentication: authenticationReducer,
});

export default rootReducer;
