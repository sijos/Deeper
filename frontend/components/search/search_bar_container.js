import { connect } from 'react-redux';
import { findResorts } from '../../actions/resort_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => ({
  findResorts: (query) => dispatch(findResorts(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);
