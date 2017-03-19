import React from 'react';

class SearchBar extends React.Component {

  render() {
    return(
      <form className='nav-search-bar'>
        <input type='text' placeholder = ' Search all mountains' />
        <button type='submit' className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
