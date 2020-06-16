import AddZipCode from '../components/AddZipCode';
import { connect } from 'react-redux';
import { addTeacherZipCode, getZipCodesByTeacher } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getZipCodesByTeacher: teacherId => dispatch(getZipCodesByTeacher(teacherId)),
    addTeacherZipCode: zipCode => dispatch(addTeacherZipCode(zipCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddZipCode);