import React from 'react';
import AuthContainer from './auth/auth_container';
import AuthFormContainer from './auth/auth_form_container';

const App = ({ children }) => (
  <div>
    <h1>Mai Kewl Site</h1>
    <AuthContainer />
    <AuthFormContainer formType='login' />
    { children }
  </div>
);

export default App;
