import React from 'react';
import AuthContainer from '../auth/auth_container';

const NavBar = () => (
  <header className="header">
    <nav className="nav-bar">
      <p>Logo Here</p>
      <AuthContainer />
    </nav>
  </header>
);

export default NavBar;
