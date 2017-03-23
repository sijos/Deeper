import * as ReviewAPI from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVEIW_ERRORS = "CLEAR_REVEIW_ERRORS";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const patchReview = (review) => ({
  type: UPDATE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_REVEIW_ERRORS
});

export const postReview = (review, callback) => (dispatch) => {
  ReviewAPI.postReview(review).then(
    (review) => { dispatch(receiveReview(review)); callback(); },
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const updateReview = (review) => (dispatch) => {
  ReviewAPI.updateReview(review).then(
    (review) => dispatch(patchReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const deleteReview = (id) => (dispatch) => {
  ReviewAPI.deleteReview(id).then(
    (review) => dispatch(removeReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};
