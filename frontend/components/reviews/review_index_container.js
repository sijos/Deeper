import { connect } from 'react-redux';
import ReviewIndexItem from './review_index_item';

const mapStateToProps = ({ session }, ownProps) =>  {
  debugger;
  return {
  currentUser: session.currentUser,
  review: ownProps.revivew,
  resortName: ownProps.resortName
}
};

export default connect(mapStateToProps, null)(ReviewIndexItem);
