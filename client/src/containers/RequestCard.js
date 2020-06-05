import { connect } from 'react-redux';
import { deleteRequest } from '../redux/actions';
import RequestCard from '../components/RequestCard';

const mapDispatchToProps = dispatch => {
  return {
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId))
  }
};

export default connect(null, mapDispatchToProps)(RequestCard)