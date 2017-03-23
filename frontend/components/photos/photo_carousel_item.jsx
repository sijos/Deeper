import React from 'react';
import Modal from 'react-modal';

class PhotoCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false});
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal}>
          <img className="slider-img clickable" src={this.props.photoUrl} />
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal-form photo-modal"
          overlayClassName="modal-form-overlay">
          <img className="lg-slider-img" src={this.props.photoUrl} />
        </Modal>
      </div>
    );
  }
}

export default PhotoCarouselItem;
