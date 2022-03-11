import { combineReducers } from 'redux';
import destinationReducer from './destination';
import listReducer from './list';
import formReducer from './form';
import userReducer from './user';
import favoritesReducer from './favorites';
import signInReducer from './signin';

const rootReducer = combineReducers({
  form: formReducer,
  destination: destinationReducer,
  list: listReducer,
  user: userReducer,
  signin: signInReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
