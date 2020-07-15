import TeacherAvailability from '../components/TeacherAvailability';
import { getRequestsWithAvail, getUserSubscriptions, getUserLessons, refreshUserAvails } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    requests: state.requests,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    getRequestsWithAvail: (userId) => dispatch(getRequestsWithAvail(userId)),
    getUserSubscriptions: (userId) => dispatch(getUserSubscriptions(userId)),
    getUserLessons: (userId) => dispatch(getUserLessons(userId)),
    refreshUserAvails: (userId) => dispatch(refreshUserAvails(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(TeacherAvailability);