import { connect } from 'react-redux';
import UserLessonsTable from '../components/UserLessonsTable';

const mapStateToProps = state => {
  return {
    lessons: state.user.lessons
  }
}

export default connect(mapStateToProps)(UserLessonsTable);