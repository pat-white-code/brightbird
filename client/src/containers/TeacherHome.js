import TeacherHome from '../components/TeacherHome';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

export default connect(mapStateToProps)(TeacherHome);