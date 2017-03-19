import React from 'react';

const ReviewIndexItem = ({review}) => {
  return (
    <li className="review">
      <section className="name-pic col-1-6">
        <nav><h5>{review.reviewer.username}</h5></nav>
        <img src={review.reviewer.profile_pic_url}></img>
      </section>
      <section className="review-bars col-1-3">
        <div className="overall-rating">{review.overall_rating}</div>
        <div className="other-ratings">
          <nav>{review.basic_t_rating}</nav>
          <nav>{review.adv_t_rating}</nav>
          <nav>{review.amenities_rating}</nav>
          <nav>{review.services_rating}</nav>
          <nav>{review.value_rating}</nav>
        </div>
      </section>
      <section className="date-body col-1-2">
        <h3>{review.date_posted}</h3>
        <p>{review.body}</p>
      </section>
    </li>
  );
};

export default ReviewIndexItem;
