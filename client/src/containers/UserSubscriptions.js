import { connect } from 'react-redux';
import UserSubscriptions from '../components/UserSubscriptions';
import { getUserSubscriptions } from '../redux/actions';

const mapStateToProps = state => {
  return {
    subscriptions: state.user.subscriptions
    // dbUpdatedAt: state.dbUpdatedAt,
    // userId: state.user.id
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserSubscriptions: userId => dispatch(getUserSubscriptions(userId))
//   }
// }

export default connect(mapStateToProps 
  // mapDispatchToProps
  )(UserSubscriptions);