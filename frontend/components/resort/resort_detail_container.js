import { connect } from 'react-redux';
import { fetchResort } from '../../actions/resort_actions';
import ResortDetail from './resort_detail';
import { selectReviews } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  resort: state.resort,
  reviews: selectReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchResort: (id) => dispatch(fetchResort(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResortDetail);
