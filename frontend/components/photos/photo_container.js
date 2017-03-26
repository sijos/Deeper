import { connect } from 'react-redux';
import { deletePhoto } from '../../actions/photo_actions';
import PhotoCarouselItem from './photo_carousel_item';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCarouselItem);
