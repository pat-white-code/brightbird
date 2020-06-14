import AddZipCode from '../components/AddZipCode';
import { connect } from 'react-redux';
import { addTeacherZipCode } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTeacherZipCode: (zipCode) => dispatch(addTeacherZipCode(zipCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddZipCode);