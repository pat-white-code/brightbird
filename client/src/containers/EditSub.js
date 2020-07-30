import { editSubByTeacher } from '../redux/actions';
import { connect } from 'react-redux';
import EditSub from '../components/EditSub';

const mapDispatchToProps = dispatch => {
  return {
    editSubByTeacher: (updatedSub) => dispatch(editSubByTeacher(updatedSub))
  }
}

export default connect(null, mapDispatchToProps)(EditSub);