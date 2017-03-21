import { connect } from 'react-redux';
import { postReview, updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ resort }) => ({
  errors: resort.errors,
  resortId: resort.id
});


const mapDispatchToProps = (dispatch) => ({
  postReview: (review) => dispatch(postReview(review)),
  updateReview: (review) => dispatch(updateReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
