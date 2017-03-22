import React from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeToSearch = this.routeToSearch.bind(this);
  }

  update(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  routeToSearch() {
    hashHistory.push("/resorts");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findResorts(this.state.input).then(
      () => this.routeToSearch()
    );
  }

  render() {
    return(
      <form className={this.props.class} onSubmit={this.handleSubmit}>
        <input type='text'
          placeholder = ' Search for your favorite mountain here!'
          onChange={this.update("input")}/>
        <button type='submit' className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
