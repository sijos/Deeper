import { connect } from 'react-redux';
import ReviewIndexItem from './review_index_item';

const mapStateToProps = ({ session }) =>  ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps, null)(ReviewIndexItem);
