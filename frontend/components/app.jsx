import React from 'react';
import NavBar from './nav_bar/nav_bar';
import AuthFormContainer from './auth/auth_form_container';
import TestModal from './modal_test';

const App = ({ children }) => (
  <div>
    <NavBar />
    <AuthFormContainer formType='login' />
    <TestModal />
    { children }
  </div>
);

export default App;
