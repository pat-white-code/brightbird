import Login from '../components/Login';
import { userLogin } from '../redux/actions';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

const mapDispatchTopProps = dispatch => {
  return {
    userLogin: (userId) => dispatch(userLogin(userId))
  }
}

export default connect(null, mapDispatchTopProps)(Login);