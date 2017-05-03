import React from 'react';
import ReactStars from 'react-stars';
import { hashHistory } from 'react-router';


class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.createMarker = this.createMarker.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.resetMarkers = this.resetMarkers.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.8898739, lng: -112.7767094 },
      zoom: 4
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.resetMarkers();
  }

  componentDidUpdate() {
    this.resetMarkers();
    if (this.markers.length === 1) {
      let pos = new google.maps.LatLng(
        this.markers[0].position.lat(),
        this.markers[0].position.lng()
      );
      this.map.setCenter(pos);
      this.map.setZoom(10);
      this.map.panBy(-250, 0);
    } else if (this.markers.length === 54) {
      let pos = new google.maps.LatLng(40.8898739, -112.7767094);
      this.map.setCenter(pos);
      this.map.panBy(-40, 0);
      this.map.setZoom(4);
    }
  }

  resetMarkers() {
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

    const listHoverItem = document.getElementById(`search-item-${resort.id}`);
    if (listHoverItem) {
      listHoverItem.onmouseenter = () => {
        this.markers.forEach(opaqueMarker => {
          opaqueMarker.setOpacity(0.25);
        });
        marker.setOpacity(1);
        infoWindow.open(this.map, marker);
      };
      listHoverItem.onmouseleave = () => {
        this.markers.forEach(fullMarker => {
          fullMarker.setOpacity(1);
        });
        infoWindow.close(this.map, marker);
      };
    }
  }


  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default SearchMap;
