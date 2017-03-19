import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import NavBar from './auth';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(NavBar);
