import { RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS,
        CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default SessionReducer;
