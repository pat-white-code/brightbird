import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import InstrumentCard from './InstrumentCard';
// import { makeStyles } from '@material-ui/core/styles';
// import RequestCard from '../containers/RequestCard';
// import FormModal from './FormModal';
import AddInstrumentModal from './AddInstrumentModal';

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
    teacher,
    getTeacherInstruments,
    dbUpdatedAt
  } = props;

  useEffect(() => {
    getTeacherInstruments(teacher.id)
    // getRequestsWithAvail(user.id)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);

  return(
    <Container>
      <h1>Instruments You Teach</h1>
      <Grid container spacing={3}>
        {/* For each instrument map a card, then have a plus sign for new instrument */}
        {teacher.instruments.map((instrument, index) => (
          <Grid key={index} item sm={6} xs={12} md={3}>
            <InstrumentCard instrument={instrument} />
            {/* <InstrumentCard request={instrument} /> */}
          </Grid>
          ))}
          <Grid item xs>
            <AddInstrumentModal />
          </Grid>
      </Grid>
      {/* <AddStudentModal /> */}
    </Container>
  )
}

export default ViewInstruments;