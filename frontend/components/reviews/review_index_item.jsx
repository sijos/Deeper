import React from 'react';
import Bars from 'react-bars';

const ReviewIndexItem = ({review}) => {
  const barData = [
    {label: 'Basic Terrain', value: review.basic_t_rating},
    {label: 'Advanced Terrain', value: review.adv_t_rating},
    {label: 'Apres Ski / Amenities', value: review.amenities_rating},
    {label: 'Experience / Customer Service', value: review.services_rating},
    {label: 'Value', value: review.value}
  ];

  return (
    <li className="review">
      <section className="name-pic col-1-6">
        <nav><h5>{review.reviewer.username}</h5></nav>
        <img src={review.reviewer.profile_pic_url}></img>
      </section>
      <section className="review-bars col-1-3">
        <div className="overall-rating">{review.overall_rating}</div>
        <div className="other-ratings">
          <div className="outer">
            <div className="inner"></div>
          </div>
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
// <Bars data={barData} />
