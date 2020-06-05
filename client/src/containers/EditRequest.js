import { connect } from 'react-redux'
import EditRequest from '../components/EditRequest';
import { editRequest } from '../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRequest: (request) => dispatch(editRequest(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRequest);