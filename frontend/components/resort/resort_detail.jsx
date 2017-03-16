import React from 'react';

class ResortDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResort(this.props.params.resortId);
  }

  render() {
    const resort = this.props.resort;
    return (
      <div>
        <h1>Main Resort Page</h1>
        {resort.name}
        {resort.address}
      </div>
    );
  }
}

export default ResortDetail;
