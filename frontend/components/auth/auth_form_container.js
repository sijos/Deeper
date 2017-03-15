import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }, ownProps) => ({
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
