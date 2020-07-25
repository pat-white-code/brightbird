import React, {useState, useEffect } from 'react';
import { Button, Typography, Container, TextField, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import ViewZipCodes from './ViewZipCodes';
import styles from '../styles/AddZipCode.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
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

const AddZipCode = (props) => {
  const {
    teacher, 
    addTeacherZipCode,
    getZipCodesByTeacher,
    dbUpdatedAt,
    deleteZipCode
  } = props;

  const classes = useStyles();
  
  const [zipCode, setZipCode] = useState('');

  useEffect(()=>{
    getZipCodesByTeacher(teacher.id)
  }, [dbUpdatedAt])

  const handleZipCode = e => {
    setZipCode(e.target.value)
    console.log('ZipCode:',zipCode)
  }

  const handleSubmit = e => {
    e.preventDefault();
    let request = {zipCode, teacherId: teacher.id}
    addTeacherZipCode(request);
    setZipCode('');
  }

  return(
    <div className={styles['add-services-container']}>
      <Typography variant='h5'>Edit Zip Codes</Typography>
      <Typography>These are the zipcodes you are electing to provide services for. Even if a house is within your driving parameters, if it is not in one of these zipcodes you will not have availability with that student.</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          labelId='add-zip-code'
          id='zip-code'
          label="Add Zip Code"
          value={zipCode}
          onChange={handleZipCode} />
        <Button 
          type='submit' 
          color="primary" 
          contained> Add </Button>
        <ViewZipCodes 
          zipCodes={teacher.zipCodes} deleteZipCode={deleteZipCode} />
      </form>
    </div>
  )
}

export default AddZipCode;