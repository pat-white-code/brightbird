import TeacherLessonsActions from '../components/TeacherLessonsActions';
import { deleteLesson } from '../redux/actions';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     lessons: state.teacher.lessons,
//     subsUpdatedAt: state.teacher.subsUpdatedAt,
//     teacherId: state.teacher.id,
//     lessonsUpdatedAt: state.teacher.lessonsUpdatedAt
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    deleteLesson: (lessonId) => dispatch(deleteLesson(lessonId))
  }
}

export default connect(null, mapDispatchToProps)(TeacherLessonsActions);