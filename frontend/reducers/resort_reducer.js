import { RECEIVE_RESORT } from '../actions/resort_actions';
import { RECEIVE_REVIEW, RECEIVE_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _defaultResort = {
  reviews: [],
  errors: []
};

const ResortReducer = (state = _defaultResort, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, _defaultResort, action.resort);
    case RECEIVE_REVIEW:
      let newState = merge({}, _defaultResort, state);
      newState.reviews.unshift(action.review);
      newState.num_reviews += 1;
      let newRatings = newState.reviews.map(review => review.overall_rating);
      newState.avg_rating =
        newRatings.reduce((a, b) => a + b, 0) / newState.num_reviews;
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default ResortReducer;
