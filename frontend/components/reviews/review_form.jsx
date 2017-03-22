import React from 'react';
import Modal from 'react-modal';
import ReactStars from 'react-stars';

const defaultState = {
  body: "",
  resort_id: 0,
  overall_rating: 0,
  basic_t_rating: 0,
  adv_t_rating: 0,
  amenities_rating: 0,
  services_rating: 0,
  value_rating: 0,
  modalOpen: false,
  modalType: "new"
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalType) {
    if (modalType === "new") {
      this.setState({
        resort_id: this.props.resortId,
        modalOpen: true,
        modalType });
    } else {
      const review = this.props.review;
      this.setState({
        resort_id: this.props.resortId,
        modalOpen: true,
        body: review.body,
        overall_rating: review.overall_rating,
        basic_t_rating: review.basic_t_rating,
        adv_t_rating: review.adv_t_rating,
        amenities_rating: review.amenities_rating,
        services_rating: review.services_rating,
        value_rating: review.value_rating,
        id: review.id,
        modalType
      });
    }
  }

  closeModal() {
    this.props.clearErrors();
    this.setState(defaultState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    if (this.state.modalType === "new") {
      this.props.postReview(review, this.closeModal);
    } else {
      this.props.updateReview(review);
    }
  }

  update(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  updateStars(ratingType) {
    return (newRating) => (
      this.setState({[ratingType]: newRating})
    );
  }

  renderRatingStars(ratingType, ratingLabel) {
    return (
      <div className="form-row">
        <label>{`${ratingLabel}`}</label>
        <ReactStars size={24} half={false} color2={"#5CCCF0"}
          value={this.state[ratingType]}
          onChange={this.updateStars(ratingType)} />
      </div>
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    const buttonText = this.props.formType === 'new' ? 'Write a' : 'Edit your';
    return (
      <div>
        <li>
          <button onClick={this.openModal.bind(this, this.props.formType)}>
            <i className="fa fa-star-o" />{buttonText} Review
          </button>
        </li>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal-form review-modal" overlayClassName="modal-form-overlay">
          <nav className="review-form-content">
            <h2>Please enter your review for {this.props.resortName} below:</h2>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit} className="review-form">
              <div className="form-row">
                <label>Share your thoughts and experiences here:</label>
                <textarea
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="review-body">
                </textarea>
              </div>
              <h4>
                Please rate the resort in each of the following categories:
              </h4>
              {this.renderRatingStars("basic_t_rating", "Basic Terrain:")}
              <p>Basic terrain includes all groomed runs rated beginner through intermediate (green, blue, double-blue, black)</p>
              {this.renderRatingStars("adv_t_rating", "Advanced Terrain:")}
              <p>Advanced terrain inlcudes all double-blacks, bowls, back-coutnry, side-country, tree runs, and parks</p>
              {this.renderRatingStars("amenities_rating", "Après Ski / Amenities:")}
              <p>Rating for resaurants, bars, and shops on the mountain and in the village/town area at the resort base</p>
              {this.renderRatingStars("services_rating", "Experience / Customer Service:")}
              <p>Includes quality of services, accessibility, friendliness of staff, and all other intangibles</p>
              {this.renderRatingStars("value_rating", "Value:")}
              <p>What you got relative to what you paid</p>
              <div className="form-row-overall">
                <label> Enter your overall rating (1-5 stars):
                  <ReactStars size={32} half={false}
                    value={this.state.overall_rating}
                    onChange={this.updateStars("overall_rating")} />
                </label>
              </div>
              <div className="submit-holder">
                <input type="submit" value="Submit Review"></input>
              </div>
            </form>
          </nav>
        </Modal>
      </div>
    );
  }
}

export default ReviewForm;
