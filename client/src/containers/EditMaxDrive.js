import { connect } from 'react-redux';
import { getTeacherInfo, editMaxDrive } from '../redux/actions';
import EditMaxDrive from '../components/EditMaxDrive';

const mapStateToProps = state => {
  return {
    teacher: state.teacher,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editMaxDrive: (maxDrive) => dispatch(editMaxDrive(maxDrive)),
    getTeacherInfo: (teacherId) => dispatch(getTeacherInfo(teacherId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMaxDrive);