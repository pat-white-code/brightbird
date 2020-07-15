import SubCard from '../components/SubCard';
import { connect } from 'react-redux';
import { deleteSub } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    deleteSub: (subId) => dispatch(deleteSub(subId))
  }
}

export default connect(null, mapDispatchToProps)(SubCard);