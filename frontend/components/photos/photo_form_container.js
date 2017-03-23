import { connect } from 'react-redux';
import { postPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({ resort }) => ({
  resortId: resort.id
});

const mapDispatchToProps = (dispatch) => ({
  postPhoto: (photo, callback) => dispatch(postPhoto(photo, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
