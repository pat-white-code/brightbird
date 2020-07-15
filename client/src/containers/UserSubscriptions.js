import { connect } from 'react-redux';
import UserSubscriptions from '../components/UserSubscriptions';
import { deleteSub } from '../redux/actions';

const mapStateToProps = state => {
  return {
    subscriptions: state.user.subscriptions,
    dbUpdatedAt: state.dbUpdatedAt,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSub: subId => dispatch(deleteSub(subId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSubscriptions);