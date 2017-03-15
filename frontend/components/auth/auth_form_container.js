import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }, ownProps) => ({
  errors: session.errors,
  formType: ownProps.formType === 'signup' ? "Sign up" : "Log in"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.formType === 'signup' ? signup : login;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
