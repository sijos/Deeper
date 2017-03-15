import React from 'react';
import NavBar from './nav_bar/nav_bar';
import AuthFormContainer from './auth/auth_form_container';

const App = ({ children }) => (
  <div>
    <NavBar />
    <AuthFormContainer formType='login' />
    { children }
  </div>
);

export default App;
