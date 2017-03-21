import * as SessionAPI from '../util/session_util_api';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => (dispatch) => (
  SessionAPI.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
);

export const logout = () => (dispatch) => (
  SessionAPI.logout().then(
    () => dispatch(receiveCurrentUser(null))
  )
);

export const signup = (user) => (dispatch) => (
  SessionAPI.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  )
);
