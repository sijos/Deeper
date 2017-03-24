import { connect } from 'react-redux';
import { fetchResort, clearResortData } from '../../actions/resort_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { fetchPhotos } from '../../actions/photo_actions';
import ResortDetail from './resort_detail';
import { selectReviews } from '../../reducers/selectors';
import { selectPhotos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  resort: state.resort,
  reviews: selectReviews(state),
  photos: selectPhotos(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchResort: (id) => dispatch(fetchResort(id)),
  fetchReviews: (id) => dispatch(fetchReviews(id)),
  fetchPhotos: (id) => dispatch(fetchPhotos(id)),
  deleteReview: (id) => dispatch(deleteReview(id)),
  clearResortData: () => dispatch(clearResortData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResortDetail);
