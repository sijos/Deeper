import React from 'react';
import AuthFormContainer from './auth_form_container';

const loggedOutButtons = () => (
  <AuthFormContainer />
);

const greetingLogout = (currentUser, logout) => (
  <ul className="login-signup">
    <li><h4>Welcome, {currentUser.username}!</h4></li>
    <li><button className="header-button" onClick={logout}>Log Out</button></li>
  </ul>
);

const Auth = ({ currentUser, logout }) => (
  currentUser ? greetingLogout(currentUser, logout) : loggedOutButtons()
);

export default Auth;
