import React from 'react';
import Modal from 'react-modal';

class TrailMapPhoto extends React.Component {
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
      <div className="trail-map-container" onClick={this.openModal}>
        <div className="thumbnail">
          <div className="trail-map clickable"
            style={{backgroundImage: `url(${this.props.trailMapUrl})`}}>
          </div>
          <p>Click to view full map!</p>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal-form photo-modal"
          overlayClassName="modal-form-overlay">
          <img className="lg-trail-map" src={this.props.trailMapUrl} />
        </Modal>
      </div>
    );
  }
}

export default TrailMapPhoto;
