import TeacherHome from '../components/TeacherHome';
import { connect } from 'react-redux';
import { getTeacherInfo } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeacherInfo: (teacherId)=> dispatch(getTeacherInfo(teacherId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHome);