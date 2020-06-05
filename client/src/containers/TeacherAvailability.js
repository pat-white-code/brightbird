import TeacherAvailability from '../components/TeacherAvailability';
import { getRequestsWithAvail } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    requests: state.requests,
    requestIsLoaded: state.requestIsLoaded,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    // fetchClientRequests: (userId) => dispatch(fetchClientRequests(userId)),
    // fetchQualifiedTeachers: (request) => dispatch(fetchQualifiedTeachers(request)),
    // setRequests: (requests) => dispatch(setRequests(requests)),
    // promiseClientRequests: (userId) => dispatch(promiseClientRequests),
    // getSchedulesByRequest: (request) => dispatch(getSchedulesByRequest(request)),
    // getAvailabilitiesByUser: (userId) => dispatch(getAvailabilitiesByUser(userId)),
    getRequestsWithAvail: (userId) => dispatch(getRequestsWithAvail(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(TeacherAvailability);