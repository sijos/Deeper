import React from 'react';
import ReactStars from 'react-stars';
import ReviewFormContainer from './review_form_container';

const ReviewIndexItem = ({review, currentUser, resortName}) => {

  const ratingBar = (score, title) => (
    <li className="rating-bar">
      <div className={`bar-${score}-5`}>
        <div className="rating-name">{title}</div>
      </div>
    </li>
  );

  const editButtons = () => {
    if (currentUser && currentUser.id === review.reviewer.id) {
      return (
        <ReviewFormContainer formType="edit"
          resortName={resortName}
          review={review} />
      );
    }
  };

  return (
    <li className="review">
      <section className="name-pic col-1-6">
        <nav><h5>{review.reviewer.username}</h5></nav>
        <img src={review.reviewer.profile_pic_url}></img>
      </section>
      <section className="review-bars col-1-3">
        <div className="overall-rating">
          Overall Rating:
          <ReactStars color2={"#5CCCF0"} size={22} edit={false}
            value={review.overall_rating}/>
        </div>
        <ul className="other-ratings">
          {ratingBar(review.basic_t_rating, "Basic Terrain")}
          {ratingBar(review.adv_t_rating, "Advanced Terrain")}
          {ratingBar(review.amenities_rating, "Après Ski / Amenities")}
          {ratingBar(review.services_rating, "Experince / Customer Service")}
          {ratingBar(review.value_rating, "Value")}
        </ul>
      </section>
      <section className="date-body col-1-2">
        <div>
          <h3>{review.date_posted}</h3>
          {editButtons()}
        </div>
        <p>{review.body}</p>
      </section>
    </li>
  );
};

export default ReviewIndexItem;
