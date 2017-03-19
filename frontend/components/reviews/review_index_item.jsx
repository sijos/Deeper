import React from 'react';

const ReviewIndexItem = () => {
  return (
    <div className="review">
      <section className="name-pic col-1-6">
        <nav><h5>Reviewer Name</h5></nav>
        <img src="http://res.cloudinary.com/dagjelvab/image/upload/v1489891110/boarder-icon.jpg"></img>
      </section>
      <section className="review-bars col-1-3">
        <div className="overall-rating">Overall Stars</div>
        <div className="other-ratings">
          <nav>Subrating 1</nav>
          <nav>Subrating 2</nav>
          <nav>Subrating 3</nav>
          <nav>Subrating 4</nav>
          <nav>Subrating 5</nav>
        </div>
      </section>
      <section className="date-body col-1-2">
        <h3>Posting date</h3>
        <p>Review body</p>
      </section>
    </div>
  );
};

export default ReviewIndexItem;
