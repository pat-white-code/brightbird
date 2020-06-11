import React from 'react';
import { Container, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import RequestCard from '../containers/RequestCard';
// import FormModal from './FormModal';
// import AddStudentModal from './AddStudentModal';

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   grid: {
//     flexGrow: 1,
//   },
// }))

const ViewInstruments = (props) => {
  const {
    teacher
    // dbUpdatedAt,
    // user,
    // getRequestsWithAvail,
    // getStudentsByUser
  } = props;

  // useEffect(() => {
  //   // getStudentsByUser(user.id)
  //   // getRequestsWithAvail(user.id)
  //   // https://github.com/facebook/create-react-app/issues/6880
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dbUpdatedAt]);

  return(
    <Container>
      <h1>Instruments You Teach</h1>
      <Grid container spacing={3}>
        {/* For each instrument map a card, then have a plus sign for new instrument */}
        {teacher.instruments.map(instrument=> (
          <Grid item xs>
            <ul>
              <li>{instrument.instrument_name}</li>
              <li>{`Minimum Age: ${instrument.min_age}`}</li>
              <li>{`Max Experience: ${instrument.max_exp}`}</li>
            </ul>
            {/* <InstrumentCard request={instrument} /> */}
          </Grid>
          ))}
          {/* <Grid item xs>
            <AddInstrumentModal student={student} />
          </Grid> */}
      </Grid>
      {/* <AddStudentModal /> */}
    </Container>
  )
}

export default ViewInstruments;