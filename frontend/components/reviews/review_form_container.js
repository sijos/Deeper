import { connect } from 'react-redux';
import { postReview,
        updateReview,
        clearErrors } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ resort, reviews }) => ({
  errors: reviews.errors,
  resortId: resort.id
});


const mapDispatchToProps = (dispatch) => ({
  postReview: (review, callback) => dispatch(postReview(review, callback)),
  updateReview: (review) => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
