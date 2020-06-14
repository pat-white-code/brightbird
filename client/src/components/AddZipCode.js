import React, {useState } from 'react';
import { Button, Typography, Container, TextField, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';


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

const AddZipCode = (props) => {
  const {addTeacherZipCode, teacher} = props;

  const [zipCode, setZipCode] = useState('');

  const handleZipCode = e => {
    setZipCode(e.target.value)
    console.log('ZipCode:',zipCode)
  }

  const handleSubmit = e => {
    e.preventDefault();
    let request = {zipCode, teacherId: teacher.id}
    addTeacherZipCode(request);
  }

  return(
    <form onSubmit={handleSubmit}>
      <TextField 
        labelId='add-zip-code'
        id='zip-code'
        label="Add Zip Code"
        value={zipCode}
        onChange={handleZipCode} />
        <Button type='submit' color="primary" contained>Add</Button>
    </form>
  )
}

export default AddZipCode;