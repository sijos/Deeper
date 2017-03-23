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

const ResortReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, idx;
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, action.resort);
    default:
      return state;
  }
};

export default ResortReducer;
