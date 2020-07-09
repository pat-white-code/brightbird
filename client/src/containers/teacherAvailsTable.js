import { connect } from 'react-redux';
import { createSubscription } from '../redux/actions';
import teacherAvailsTable from '../components/TeacherAvailsTable';

const mapDispatchToProps = dispatch => {
  return {
    createSubscription: (avail)=> {dispatch(createSubscription(avail))}
  }
}

export default connect(null, mapDispatchToProps)(teacherAvailsTable)