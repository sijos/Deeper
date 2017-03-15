import React from 'react';
import NavBar from './nav_bar/nav_bar';
import AuthFormContainer from './auth/auth_form_container';
import Home from './home/home';

const App = ({ children }) => (
  <div>
    <NavBar />
    { children }
  </div>
);

export default App;
