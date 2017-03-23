import { RECEIVE_RESORT } from '../actions/resort_actions';
import { RECEIVE_REVIEW,
        UPDATE_REVIEW,
        REMOVE_REVIEW,
        RECEIVE_REVIEW_ERRORS,
        CLEAR_REVEIW_ERRORS } from '../actions/review_actions';
import merge from 'lodash/merge';

const _defaultResort = {
  reviews: [],
  errors: []
};

const findReview = (reviews, action) => {
  let idx;
  reviews.forEach((review, i) => {
    if (review.id === action.review.id) {
      idx = i;
    }
  });
  return idx;
};

const calcAvgRating = (reviews, numReviews) => {
  let newRatings = reviews.map(review => review.overall_rating);
  return (newRatings.reduce((a, b) => a + b, 0) / numReviews);
};

const ResortReducer = (state = _defaultResort, action) => {
  Object.freeze(state);
  let newState, idx;
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, _defaultResort, action.resort);
    case RECEIVE_REVIEW:
      newState = merge({}, _defaultResort, state);
      newState.reviews.unshift(action.review);
      newState.num_reviews += 1;
      newState.avg_rating = calcAvgRating(
        newState.reivews, newState.num_reviews);
      return newState;
    case UPDATE_REVIEW:
      newState = merge({}, _defaultResort, state);
      idx = findReview(newState.reviews, action);
      newState.reviews.splice(idx, 1);
      newState.reviews.unshift(action.review);
      newState.avg_rating = calcAvgRating(
        newState.reviews, newState.num_reviews);
      return newState;
    case REMOVE_REVIEW:
      newState = merge({}, _defaultResort, state);
      idx = findReview(newState.reviews, action);
      newState.reviews.splice(idx, 1);
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      let errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_REVEIW_ERRORS:
      newState = merge({}, state);
      return Object.assign(newState, {errors: []});
    default:
      return state;
  }
};

export default ResortReducer;
