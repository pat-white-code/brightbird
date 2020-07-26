import { getSubsByTeacher } from '../redux/actions';
import { connect } from 'react-redux';
import TeacherSchedule from '../components/TeacherSchedule';

const mapStateToProps = state => {
  return {
    subs: state.teacher.subs,
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSubsByTeacher: teacherId => dispatch(getSubsByTeacher(teacherId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSchedule);