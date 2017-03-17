import React from 'react';

class ResortIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResorts();
  }

  render() {
    return (
      <div className="index-container">
        <h2>Popular Mountains</h2>
        <ul className="resort-index">
          {this.props.resorts.map(resort => (
            <li key={resort.id}>
              <div className="resort-item">
                <img className="resort-photo" src={resort.profile_pic_url} />
                {resort.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResortIndex;
