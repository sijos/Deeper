import React from 'react';
import ResortPhotoCarousel from './resort_photo_carousel';

class ResortDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResort(this.props.params.resortId);
  }

  mapPriceToSym() {
    let dollars = "";
    for (let i = 0; i < this.props.resort.price_rating; i++) {
      dollars += "$";
    }
    return dollars;
  }

  renderStars() {
    return(
      <ul className="review-stars">
        <li><i className="fa fa-star fa-lg" /></li>
        <li><i className="fa fa-star fa-lg" /></li>
        <li><i className="fa fa-star fa-lg" /></li>
        <li><i className="fa fa-star fa-lg" /></li>
        <li><i className="fa fa-star-half-o fa-lg" /></li>
      </ul>
    );
  }

  render() {
    const resort = this.props.resort;
    return (
      <div className="detail-page">
        <div className="resort-detail">
          <div className="detail-header">
            <div className="resort-details">
              <h1>{resort.name}</h1>
              {this.renderStars()}
              <ul className="location">
                <li>{this.mapPriceToSym()}</li>
                <li>{resort.city}, {resort.state_province}</li>
                <li>{resort.country}</li>
              </ul>
            </div>
            <ul className="review-buttons">
              <li><button>
                <i className="fa fa-star-o"></i>Write a Review
              </button></li>
              <li><button>
                <i className="fa fa-camera"></i>Add Photo
              </button></li>
            </ul>
          </div>
          <div className="resort-photos-container">
            <div className="trail-map-container">
              <div className="thumbnail">
                <img className="trail-map" src={resort.trail_map_url} />
              </div>
            </div>
            <ResortPhotoCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default ResortDetail;
