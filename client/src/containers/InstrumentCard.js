import { connect } from 'react-redux';
import InstrumentCard from '../components/InstrumentCard';
import { deleteTeacherInstrument } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    deleteTeacherInstrument: (teacherInstrumentId) => dispatch(deleteTeacherInstrument(teacherInstrumentId))
  }
}

export default connect(null, mapDispatchToProps)(InstrumentCard);