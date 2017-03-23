import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResortsReducer from './resorts_reducer';
import ResortReducer from './resort_reducer';
import ReviewsReducer from './reviews_reducer';
import PhotosReducer from './photos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  resorts: ResortsReducer,
  resort: ResortReducer,
  reviews: ReviewsReducer,
  photos: PhotosReducer
});

export default RootReducer;
