import { EditSubByTeacher } from '../redux/actions';
import { connect } from 'react-redux';
import EditSub from '../components/EditSub';

const mapDispatchToProps = dispatch => {
  return {
    EditSubByTeacher: (updatedSub) => dispatch(EditSubByTeacher(updatedSub))
  }
}

export default connect(null, mapDispatchToProps)(EditSub);