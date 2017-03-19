import React from 'react';
import AuthContainer from '../auth/auth_container';
import SearchBar from '../search_bar/search_bar';

const NavBar = ({ navType }) => {
  let navClass, headerClass, searchBar, logo;
  if (navType === "search") {
    navClass = "search-nav-bar";
    headerClass = "search-header";
    searchBar = <SearchBar />;
    logo = <img className="logo" src='assets/Logo-white.png' />;
  } else {
    navClass = "nav-bar";
    headerClass = "header";
    logo = <img className="logo" src='assets/Logo.png' />;
  }


  return (
    <header className={headerClass}>
      <nav className={navClass}>
        {logo}
        {searchBar}
        <AuthContainer navClass={navClass}/>
      </nav>
    </header>
  );
};

export default NavBar;
