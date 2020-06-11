import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => {
  return {
    user: state.user,
    teacher: state.teacher
  }
}

export default connect(mapStateToProps)(Nav)

