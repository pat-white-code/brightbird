import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
import TeacherForm from '../containers/TeacherForm';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '75vh',
    padding: 50
  },
  container: {
    marginBlockStart: '50px'
  },
  formComplete: {
    marginBlockStart: '50px'
  }
})

const TeacherSignup = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography variant='h4'>Teacher Information</Typography>
      <Container className={classes.container} maxWidth='md'>
        <p>We are always excited to work with new teachers on our team! Following initial signup, you will be able to add information about the instruments you teach, and your driving/service area settings!</p>
        <TeacherForm />
      </Container>
    </div>

  )
}

export default TeacherSignup;