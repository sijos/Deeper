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
      <ul>
        {this.props.resorts.map(resort => (
          <li key={resort.id}>{resort.name}</li>
        ))}
      </ul>
    );
  }
}

export default ResortIndex;
