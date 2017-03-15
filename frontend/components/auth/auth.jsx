import React from 'react';

const loggedOutButtons = () => (
  <ul className="login-signup">
    <li><button className="header-button">Log In</button></li>
    <li><button className="header-button">Sign Up</button></li>
  </ul>
);

const greetingLogout = (currentUser, logout) => (
  <nav className="greeting">
    <h3>Welcome, {currentUser.username}!</h3>
    <button className="header-button" onClick={logout}>Log Out</button>
  </nav>
);

const Auth = ({ currentUser, logout }) => (
  currentUser ? greetingLogout(currentUser, logout) : loggedOutButtons()
);

export default Auth;
