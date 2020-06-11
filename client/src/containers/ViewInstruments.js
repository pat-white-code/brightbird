
import { connect } from 'react-redux';
import ViewInstruments from '../components/ViewInstruments';
import { getTeacherInstruments } from '../redux/actions';


const mapStateToProps = state => {
  return {
    teacher: state.teacher,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeacherInstruments: (teacherId) => dispatch(getTeacherInstruments(teacherId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstruments)