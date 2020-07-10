import { connect } from 'react-redux';
import UserSubscriptions from '../components/UserSubscriptions';

const mapStateToProps = state => {
  return {
    subscriptions: state.user.subscriptions
  }
}

export default connect(mapStateToProps)(UserSubscriptions);