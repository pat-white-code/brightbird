import AddRequest from '../components/AddRequest';
import { connect } from 'react-redux';
import {addRequest} from '../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRequest: (request) => dispatch(addRequest(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRequest)