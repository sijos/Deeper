import React from 'react';
import { hashHistory } from 'react-router';

class ResortIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResorts();
  }

  routeToResort(id) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`/resorts/${id}`);
    };
  }

  render() {
    return (
      <div className="index-container">
        <h2>Popular Mountains</h2>
        <ul className="resort-index">
          {this.props.resorts.map(resort => (
            <li key={resort.id} className="resort-item"
              onClick={this.routeToResort(resort.id)}>
              <img className="resort-photo" src={resort.profile_pic_url} />
              {resort.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResortIndex;
