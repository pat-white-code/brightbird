import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
import ParentForm from '../containers/ParentForm';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '75vh',
    border: '1px red solid',
    padding: 50
  },
  container: {
    marginBlockStart: '50px'
  },
  formComplete: {
    marginBlockStart: '50px'
  }
})

const ParentSignup = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography variant='h4'>Parent Information</Typography>
      <Container className={classes.container} maxWidth='md'>
        <p>First we need to create your account. Many of our customers are parents, for whom their child is the student. We do teach adults, however, so if you are the student, just enter your own personal informaiton on student section as well</p>
        <ParentForm />
      </Container>
      <Typography className={classes.formComplete}> <b>Parent Info </b>/ Address Info / Student Info / Select Teacher</Typography>
    </div>

  )
}

export default ParentSignup;