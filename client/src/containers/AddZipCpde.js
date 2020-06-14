import AddZipCode from '../components/AddZipCode';
import { connect } from 'react-redux';
import { AddTeacherZipCode } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    addTeacherZipCode: (zipCode) => dispatch(addTeacherZipCode(zipCode))
  }
}

export default connect(null, mapDispatchToProps)(AddTeacherZipCode);