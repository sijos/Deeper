import React from 'react';
import { hashHistory } from 'react-router';

class ResortIndex extends React.Component {
  constructor(props) {
    super(props);
    this.routeToMap = this.routeToMap.bind(this);
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

  routeToMap() {
    this.props.findResorts("");
    hashHistory.push('/resorts');
  }

  render() {
    return (
      <div className="index-container">
        <h2>Check out popular mountains below or&nbsp;
          <button className="route-button" onClick={this.routeToMap}>
            click here </button> to view map of all resorts!
        </h2>
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
