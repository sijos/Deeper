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
    if (this.props.path !== "/resorts") {
      hashHistory.push("/resorts");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.findResorts(this.state.input).then(
      () => this.routeToSearch()
    );
  }

  renderFormContent() {
    return (
      <div className="search-form-content">
        <input type='text'
          placeholder = ' Search for your favorite mountain here!'
          onChange={this.update("input")}/>
        <button type='submit' className="search-button">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }

  render() {
    if (this.props.path === "/resorts") {
      return(
        <form className={this.props.class} onKeyUp={this.handleSubmit}>
          {this.renderFormContent()}
        </form>
      );
    } else {
      return(
        <form className={this.props.class} onSubmit={this.handleSubmit}>
          {this.renderFormContent()}
        </form>
      );
    }
  }
}

export default SearchBar;
