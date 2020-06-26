import { connect } from 'react-redux';
import TeacherWeek from '../components/TeacherWeek';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

export default connect(mapStateToProps)(TeacherWeek);
