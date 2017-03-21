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
    this.setState({
      resort_id: this.props.resortId,
      modalOpen: true,
      modalType });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    if (this.state.modalType === "new") {
      this.props.postReview(review);
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    );
  }

  renderRatingStars(ratingType) {
    return (
      <ReactStars size={15} half={false}
        value={this.state[ratingType]}
        onChange={this.updateStars(ratingType)} />
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
    return (
      <div>
        <li>
          <button onClick={this.openModal.bind(this, "new")}>
            <i className="fa fa-star-o" />Write a Review
          </button>
        </li>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal-form" overlayClassName="modal-form-overlay">
          <nav className="review-form-content">
            <h2>Enter your review for {this.props.resortName} below:</h2>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
              <label> Share your thoughts here:
                <textarea
                  value={this.state.body}
                  onChange={this.update("body")}
                  className="review-body">
                </textarea>
              </label>
              <label> Enter your rating:
                <ReactStars size={22} half={false}
                  value={this.state.overall_rating}
                  onChange={this.updateStars("overall_rating")} />
              </label>
              <h4>
                Please rate the resort in each of the following categories:
              </h4>
              <label>Basic Terrain:
                {this.renderRatingStars("basic_t_rating")}
              </label>
              <label>Advanced Terrain:
                {this.renderRatingStars("adv_t_rating")}
              </label>
              <label>Après Ski / Amenities:
                {this.renderRatingStars("amenities_rating")}
              </label>
              <label>Experience / Customer Service:
                {this.renderRatingStars("services_rating")}
              </label>
              <label>Value:
                {this.renderRatingStars("value_rating")}
              </label>
              <input type="submit" value="Submit Review"></input>
            </form>
          </nav>
        </Modal>
      </div>
    );
  }
}

export default ReviewForm;
