import { connect } from 'react-redux';
import TeacherWeek from '../components/TeacherWeek';
import { getTeacherWeek } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeacherWeek: (teacherId) => dispatch(getTeacherWeek(teacherId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherWeek);
