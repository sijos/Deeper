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
      return merge({}, action.resort);
    case RECEIVE_REVIEW:
      let newState = merge({}, state);
      newState.reviews.unshift(action.review);
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default ResortReducer;
