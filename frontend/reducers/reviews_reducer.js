import { RECEIVE_REVIEW,
        RECEIVE_REVIEWS,
        REMOVE_REVIEW,
        RECEIVE_REVIEW_ERRORS,
        CLEAR_REVEIW_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _noReviews = {
  errors: []
};

const ReviewsReducer = (state = _noReviews, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, _noReviews, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      let errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_REVEIW_ERRORS:
      return merge({}, state, {errors: []});
    default:
      return state;
  }
};

export default ReviewsReducer;
