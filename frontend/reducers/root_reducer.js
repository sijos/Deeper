import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResortsReducer from './resorts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  resorts: ResortsReducer
});

export default RootReducer;
