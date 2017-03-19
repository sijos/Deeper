import React from 'react';
import AuthContainer from '../auth/auth_container';
import SearchBar from '../search_bar/search_bar';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {

  routeHome() {
    hashHistory.push('/');
  }

  render () {
    let navClass, headerClass, searchBar, logo;
    if (this.props.navType === "search") {
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
          <div className="clickable" onClick={this.routeHome}>
            {logo}
          </div>
          {searchBar}
          <AuthContainer navClass={navClass}/>
        </nav>
      </header>
    );
  }
}

export default NavBar;
