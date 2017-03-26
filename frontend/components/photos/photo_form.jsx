import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Modal from 'react-modal';

const CLOUDINARY_UPLOAD_PRESET = 'auaggvj0';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dagjelvab/image/upload';
const defaultState = {
  url: "",
  resort_id: 0,
  uploadedFile: '',
  modalOpen: false
};

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      resort_id: this.props.resortId,
      modalOpen: true
    });
  }

  closeModal() {
    this.setState(defaultState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = {
      url: this.state.url,
      resort_id: this.state.resort_id
    };
    this.props.postPhoto(photo, this.closeModal);
  }

  onImageDrop(files) {
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, res) => {
      if (err) {
        console.error(err);
      }
      if (res.body.secure_url !== '') {
        this.setState({
          url: res.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <li>
          <button onClick={this.openModal.bind(this)}>
            <i className="fa fa-camera"></i>Add Photo
          </button>
        </li>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="modal-form photo-form"
          overlayClassName="modal-form-overlay">
          <nav className="photo-input">
            <div>Add a photo for {this.props.resortName} below, then</div>
            <button onClick={this.handleSubmit}>Click to Submit!</button>
          </nav>
          <div className="file-upload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop}>
              <p>Drag/drop your image here or select a file to upload!</p>
            </Dropzone>
          </div>

          <div className="photo-preview">
            {this.state.url === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.url} />
            </div>}
          </div>
        </Modal>
      </div>
    );
  }
}

export default PhotoForm;
