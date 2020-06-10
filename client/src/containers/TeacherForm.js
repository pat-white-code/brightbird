import { teacherLogin } from '../redux/actions';
import { connect } from 'react-redux';
import TeacherForm from '../components/TeacherForm';


const mapDispatchToProps = dispatch => {
  return {
    teacherLogin: (teacherId) => dispatch(teacherLogin(teacherId))
  }
}

export default connect(null, mapDispatchToProps)(TeacherForm);