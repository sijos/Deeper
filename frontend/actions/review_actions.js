import * as ReviewAPI from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const postReview = (review) => (dispatch) => {
  ReviewAPI.postReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const updateReview = (review) => (dispatch) => {
  ReviewAPI.updateReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};

export const deleteReview = (id) => (dispatch) => {
  ReviewAPI.deleteReview(id).then(
    (review) => dispatch(removeReview(review)),
    (error) => dispatch(receiveErrors(error.responseJSON))
  );
};
