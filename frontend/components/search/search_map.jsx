import React from 'react';
import ReactStars from 'react-stars';
import { hashHistory } from 'react-router';


class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.createMarker = this.createMarker.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.1381272, lng: -108.022974 },
      zoom: 5
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // if (this.props.resorts) {
    //
    // }
  }

  componentDidUpdate() {
    if (this.props.resorts) {
      this.clearMarkers();
      this.props.resorts.forEach((resort) => this.createMarker(resort, this.map));
    }
  }

  clearMarkers() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  createMarker(resort, map) {
    const pos = new google.maps.LatLng(resort.lat, resort.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      animation: google.maps.Animation.DROP,
      resortId: resort.id
    });

    this.markers.push(marker);

    marker.addListener('click', () => this.handleClick(resort));
    this.addDetails(resort, marker);
  }

  handleClick(resort) {
    hashHistory.push(`/resorts/${resort.id}`);
  }

  addDetails(resort, marker) {
    const resortDetails = (
      '<div class="info-window-content">' +
        `<h2>${resort.name}</h2>` +
        `<ReactStars size={12} edit={false} value={${resort.avg_rating}} />` +
      '</div>'
    );

    const infoWindow = new google.maps.InfoWindow({
      content: resortDetails
    });

    marker.addListener('mouseover', () => {
      infoWindow.open(this.mapNode, marker);
    });
    marker.addListener('mouseout', () => {
      infoWindow.close(this.mapNode, marker);
    });

  }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default SearchMap;
