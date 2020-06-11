import AddInstrument from '../components/AddInstrument';
import { connect } from 'react-redux';
import { addInstrument } from '../redux/actions';

const mapStateToProps = state => {
  return {
    teacher: state.teacher
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addInstrument: (teacherId, instrument) => dispatch(addInstrument(teacherId, instrument))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInstrument);