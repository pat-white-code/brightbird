import React, {useState } from 'react';
import { Button, Typography, Container, TextField, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import AddZipCode from '../containers/AddZipCode';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column'
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  }
}));

const EditServices = () => {

  return(
    <Container maxWidth='md'>
      <Typography variant='h4' gutterBottom>Edit Services</Typography>
      <AddZipCode />
    </Container>
  )
}

export default EditServices;