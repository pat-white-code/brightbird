import TeacherLessons from '../components/TeacherLessons';
import { getLessonsByTeacher } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    lessons: state.teacher.lessons,
    subsUpdatedAt: state.teacher.subsUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLessonsByTeacher: (teacherId) => dispatch(getLessonsByTeacher(teacherId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLessons);