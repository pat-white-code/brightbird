import { teacherCredentials } from "../redux/actions"
import TeacherLogin from '../components/TeacherLogin';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    teacherCredentials: (credentials) => dispatch(teacherCredentials(credentials))
  }
}

export default connect(null, mapDispatchToProps)(TeacherLogin);