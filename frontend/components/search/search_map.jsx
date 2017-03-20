import React from 'react';

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.1381272, lng: -108.022974 },
      zoom: 6
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default SearchMap;
