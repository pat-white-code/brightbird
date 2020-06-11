
import { connect } from 'react-redux';
import ViewInstruments from '../components/ViewInstruments';


const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

export default connect(mapStateToProps)(ViewInstruments)