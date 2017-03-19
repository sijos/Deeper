import React from 'react';
import ResortPhotoCarousel from './resort_photo_carousel';
import ReviewIndexItem from '../reviews/review_index_item';

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
    if (Object.keys(resort).length === 0) {
      return <div></div>;
    } else {
      return (
        <div className="detail-page">
          <div className="resort-detail">
            <div className="detail-header">
              <div className="resort-details">
                <h1>{resort.name}</h1>
                <div className="review-row">
                  {this.renderStars()}
                  <div>{resort.num_reviews} Reviews</div>
                </div>
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
              <div className="photo-carousel">
                <ResortPhotoCarousel />
              </div>
            </div>
          </div>
          <ul className="review-index">
            {resort.reviews.map(review => (
              <ReviewIndexItem key={review.id} review={review} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default ResortDetail;
