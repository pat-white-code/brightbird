import ParentForm from '../components/ParentForm';
import { initialLogin } from '../redux/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return{
    initialLogin: (userId)=> dispatch(initialLogin(userId))
  }
}

export default connect(null, mapDispatchToProps)(ParentForm);