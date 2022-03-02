import { combineReducers } from 'redux';
import destinationReducer from './destination';

const rootReducer = combineReducers({
  destination: destinationReducer,
});

export default rootReducer;
