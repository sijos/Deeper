import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResortsReducer from './resorts_reducer';
import ResortReducer from './resort_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  resorts: ResortsReducer,
  resort: ResortReducer,
  reviews: ReviewReducer
});

export default RootReducer;
