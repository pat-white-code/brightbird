import { connect } from 'react-redux';
import TeacherWeek from '../components/TeacherWeek';
import { getTeacherWeek, deleteTeacherWeek } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeacherWeek: (teacherId) => dispatch(getTeacherWeek(teacherId)),
    deleteTeacherWeek: (weekId) => dispatch(deleteTeacherWeek(weekId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherWeek);
