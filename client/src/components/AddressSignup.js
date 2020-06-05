import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
import AddressForm from '../containers/AddressForm';

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

const AddressSignup = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography variant='h4'>Address Information</Typography>
      <Container className={classes.container} maxWidth='md'>
        <p>In order to calculate teacher availability, we need to get your home address where the lessons would be happening.</p>
        <AddressForm />
      </Container>
      <Typography className={classes.formComplete}> <em>Parent Info</em> / <b>Address Info</b> / Student Info / Select Teacher</Typography>
    </div>

  )
}

export default AddressSignup;