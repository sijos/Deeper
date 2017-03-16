import { connect } from 'react-redux';
import { fetchResort } from '../../actions/resort_actions';
import ResortDetail from './resort_detail';

const mapStateToProps = (state) => ({
  resort: state.resort
});

const mapDispatchToProps = (dispatch) => ({
  fetchResort: (id) => dispatch(fetchResort(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResortDetail);
