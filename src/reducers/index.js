import { combineReducers } from 'redux';
import destinationReducer from './destination';
import listReducer from './list';
import formReducer from './form';
import authenticationReducer from './authentication';
import favoritesReducer from './form';
import signInReducer from './signin';

const rootReducer = combineReducers({
  form: formReducer,
  destination: destinationReducer,
  list: listReducer,
  authentication: authenticationReducer,
  signin: signInReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
