import React from 'react';
import NavBar from './nav_bar/nav_bar';
import AuthFormContainer from './auth/auth_form_container';
import Home from './home/home';

const App = ({ children, location }) => {
  const navType = location.pathname === "/" ? "main" : "search";
  return (
    <div>
      <NavBar path={location.pathname} navType={navType} />
      { children }
    </div>
  );
};

export default App;
