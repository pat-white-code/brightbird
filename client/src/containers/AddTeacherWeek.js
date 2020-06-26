import AddTeacherWeek from '../components/AddTeacherWeek';
import { connect } from 'react-redux';
import { createTeacherWeek } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTeacherWeek: (reqBody) => (dispatch(createTeacherWeek(reqBody)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacherWeek);