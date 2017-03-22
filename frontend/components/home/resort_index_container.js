import { connect } from 'react-redux';
import { selectHomeResorts } from '../../reducers/selectors';
import { fetchResorts, findResorts } from '../../actions/resort_actions';
import ResortIndex from './resort_index';

const mapStateToProps = (state) => ({
  resorts: selectHomeResorts(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchResorts: () => dispatch(fetchResorts()),
  findResorts: () => dispatch(findResorts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResortIndex);
