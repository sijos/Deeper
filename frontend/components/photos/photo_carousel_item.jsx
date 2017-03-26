import React from 'react';
import Modal from 'react-modal';

class PhotoCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false});
  }

  deleteButton() {
    if (this.props.currentUser &&
      this.props.currentUser.id === this.props.photo.poster.id) {
      return (
        <button onClick={this.handleDelete(this.props.photo.id)}>
          Delete Photo</button>
      );
    }
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();
      this.props.deletePhoto(id);
    };
  }

  render() {
    const photo = this.props.photo;
    return (
      <div>
        <div onClick={this.openModal}>
          <img className="slider-img clickable" src={photo.url} />
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="photo-modal modal-form"
          overlayClassName="modal-form-overlay">
          <img className="lg-slider-img" src={photo.url} />
          {this.deleteButton()}
        </Modal>
      </div>
    );
  }
}

export default PhotoCarouselItem;
