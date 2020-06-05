import AddressForm from '../components/AddressForm';
import { getAddressesByUser, addUserAddress } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    // initialAddress: (addressId) => dispatch(initialAddress(addressId)),
    addUserAddress: (userId, address) => dispatch(addUserAddress(userId, address)),
    getAddressesByUser: (userId) => dispatch(getAddressesByUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(AddressForm);