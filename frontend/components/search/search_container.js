import { connect } from 'react-redux';
import { fetchResorts } from '../../actions/resort_actions';
import { selectSearchResorts } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = (state) => ({
  resorts: selectSearchResorts(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchResorts: () => dispatch(fetchResorts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
