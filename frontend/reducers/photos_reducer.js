import { RECEIVE_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo});
    case REMOVE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
