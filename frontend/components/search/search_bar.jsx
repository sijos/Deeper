import React from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  routeToSearch() {
    return (e) => {
      e.preventDefault();
      hashHistory.push("/resorts");
    };
  }

  render() {
    return(
      <form className={this.props.class} onClick={this.routeToSearch()}>
        <input type='text' placeholder = ' Search for your favorite mountain here!' />
        <button type='submit' className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
