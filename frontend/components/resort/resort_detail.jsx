import React from 'react';
import ReactStars from 'react-stars';
import ResortPhotoCarousel from './resort_photo_carousel';
import ReviewIndexItem from '../reviews/review_index_item';
import ReviewFormContainer from '../reviews/review_form_container';

class ResortDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResort(this.props.params.resortId);
  }

  // componentDidUpdate() {
  //   this.props.fetchResort(this.props.params.resortId);
  // }

  componentWillReceiveProps(newProps) {
    if (this.props.params.resortId !== newProps.params.resortId) {
      this.props.fetchResort(newProps.params.resortId);
    }
  }

  mapPriceToSym() {
    let dollars = "";
    for (let i = 0; i < this.props.resort.price_rating; i++) {
      dollars += "$";
    }
    return dollars;
  }

  renderStars() {
    return (
      <ReactStars edit={false} color1={"lightgray"} color2={"black"}
        size={22} value={this.props.resort.avg_rating}/>
    );
  }

  renderButtons() {
    return (
      <ul className="review-buttons">
        <ReviewFormContainer resortName={this.props.resort.name} />
        <li><button>
          <i className="fa fa-camera"></i>Add Photo
        </button></li>
      </ul>
    );
  }

  render() {
    const resort = this.props.resort;
    const noReviews = resort.reviews.length < 1 ?
      "This mountain doesn't have any reviews yet, be the first to write one!"
      : "";
    return (
      <div className="detail-page">
        <div className="resort-detail">
          <div className="detail-header">
            <div className="resort-details">
              <h1>{resort.name}</h1>
              <div className="review-row">
                <div className="review-stars">
                  {this.renderStars()}
                </div>
                <div>{resort.num_reviews} Reviews</div>
              </div>
              <ul className="location">
                <li>{this.mapPriceToSym()}</li>
                <li>{resort.city}, {resort.state_province}</li>
                <li>{resort.country}</li>
              </ul>
            </div>
            {this.renderButtons()}
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
          <h4>{noReviews}</h4>
          {resort.reviews.map(review => (
            <ReviewIndexItem key={review.id} review={review} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ResortDetail;
