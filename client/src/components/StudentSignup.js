import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
import AddStudent from '../containers/AddStudent';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '75vh',
    // border: '1px red solid',
    padding: 50
  },
  container: {
    marginBlockStart: '50px'
  },
  formComplete: {
    marginBlockStart: '50px'
  }
})

const StudentSignup = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography variant='h4'>Student Information</Typography>
      <Container className={classes.container} maxWidth='md'>
        <p>In order to offer time slots with our teachers, we need to know a little information about the student's age, experience level, and lessons they are seeking. If a student is looking for multiple lesson packages (such as guitar lessons and piano lessons), you will be able to add additional lesson requests after completing initial sign-in</p>
      </Container>
      <AddStudent />
      <Typography className={classes.formComplete}> <em>Parent Info</em> / <em>Address Info</em> / <b>Student Info</b> / Select Teacher</Typography>
    </div>

  )
}

export default StudentSignup;