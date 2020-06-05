import AddStudent from '../components/AddStudent';
import { addStudent, getAddressesByUser } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    addStudent: (student, request) => dispatch(addStudent(student, request)),
    getAddressesByUser: (userId) => dispatch(getAddressesByUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(AddStudent);