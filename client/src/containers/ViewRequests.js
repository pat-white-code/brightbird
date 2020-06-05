import { connect } from 'react-redux';
import ViewRequests from '../components/ViewRequests';
import { getRequestsWithAvail, getStudentsByUser } from '../redux/actions';

const mapStateToProps = state => {
  return {
    requests: state.requests,
    user: state.user,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRequestsWithAvail: (userId) => dispatch(getRequestsWithAvail(userId)),
    getStudentsByUser: (userId) => dispatch(getStudentsByUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRequests)