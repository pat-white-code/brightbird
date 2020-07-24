import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { userLogsOut } from '../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogsOut: ()=> dispatch(userLogsOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

