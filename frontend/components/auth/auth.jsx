import React from 'react';
import AuthFormContainer from './auth_form_container';

const buttonStyle = (navClass) => (
  navClass === "nav-bar" ? "header-button" : "sm-header-button"
);

const loggedOutButtons = (navClass) => (
  <AuthFormContainer buttonStyle={buttonStyle(navClass)} />
);

const greetingLogout = (currentUser, logout, navClass) => (
  <ul className="login-signup">
    <li className="greeting">Welcome, {currentUser.username}!</li>
    <li><button className={buttonStyle(navClass)}
      onClick={logout}>Log Out</button></li>
  </ul>
);

const Auth = ({ currentUser, logout, navClass }) => (
  currentUser ? greetingLogout(currentUser, logout, navClass) :
    loggedOutButtons(navClass)
);

export default Auth;
