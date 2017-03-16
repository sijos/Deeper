import { RECEIVE_RESORT } from '../actions/resort_actions';
import merge from 'lodash/merge';

const ResortReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESORT:
      return merge({}, action.resort);
    default:
      return state;
  }
};

export default ResortReducer;
