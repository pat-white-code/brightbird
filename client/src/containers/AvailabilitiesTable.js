import { connect } from 'react-redux';
import AvailabilitiesTable from '../components/AvailabilitiesTable';

const mapStateToProps = state => {
  return {
    availabilities: state.availabilities
  }
}

export default connect(mapStateToProps)(AvailabilitiesTable);