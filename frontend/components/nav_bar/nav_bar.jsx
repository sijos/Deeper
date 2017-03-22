import React from 'react';
import AuthContainer from '../auth/auth_container';
import SearchBarContainer from '../search/search_bar_container';
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
      searchBar = <SearchBarContainer path={this.props.path}
        class="nav-search-bar"/>;
      logo = <img className="logo"
        src='http://res.cloudinary.com/dagjelvab/image/upload/v1490030110/logo-white.png'/>;
    } else {
      navClass = "nav-bar";
      headerClass = "header";
      logo = <img className="logo"
        src='http://res.cloudinary.com/dagjelvab/image/upload/v1490030069/logo.png'/>;
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
