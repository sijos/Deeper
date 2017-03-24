import { RECEIVE_RESORT, CLEAR_RESORT_DATA } from '../actions/resort_actions';
import merge from 'lodash/merge';

const ResortReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState, idx;
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, action.resort);
    case CLEAR_RESORT_DATA:
      return {};
    default:
      return state;
  }
};

export default ResortReducer;
