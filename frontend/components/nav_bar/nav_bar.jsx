import React from 'react';
import AuthContainer from '../auth/auth_container';

const NavBar = ({ navType }) => {
  let navClass, headerClass, searchBar;
  if (navType === "search") {
    navClass = "search-nav-bar";
    headerClass = "search-header";
    searchBar = <div>search bar here</div>;
  } else {
    navClass = "nav-bar";
    headerClass = "header";
  }


  return (
    <header className={headerClass}>
      <nav className={navClass}>
        <img className="logo" src='assets/Logo.png'></img>
        {searchBar}
        <AuthContainer navClass={navClass}/>
      </nav>
    </header>
  );
};

export default NavBar;
