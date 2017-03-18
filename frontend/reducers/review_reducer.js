import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _noReviews = {
  review: {},
  errors: []
};

const ReviewReducer = (state = _noReviews, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      const reviews = merge({}, state.reviews, action.review);
      return merge({}, _noReviews, { reviews });
    default:
      return state;
  }
};
