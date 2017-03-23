import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'auaggvj0';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dagjelvab/image/upload';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uploadedFileCloudinaryUrl: '' };
    this.onImageDrop = this.onImageDrop.bind(this);
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
          uploadedFileCloudinaryUrl: res.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="file-upload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drag/drop your image here or select a file to upload!</p>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>
    );
  }
}

export default PhotoForm;
