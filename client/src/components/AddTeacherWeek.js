import React, { useState } from 'react';
import { Button, Typography, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import TimePicker from './TimePicker';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';



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

const AddTeacherWeek = (props) => {
  const { 
    handleClose,
    days,
    teacher,
    createTeacherWeek
  } = props;
  // instrument
  // lesson duration  
  const classes = useStyles();
  const [dayId, setDayId] = useState(0);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime ] = useState("21:00")


  const handleDayId = e => {
    console.log('DAY ID: ', dayId)
    setDayId(e.target.value)
  }

  const handleStartTime = e => {
    console.log('START TIME', startTime)
    console.log('TARGET VALUE', e.target.value)
    setStartTime(e.target.value)
  }
  const handleEndTime = e => {
    console.log('END TIME', startTime)
    console.log('TARGET VALUE', e.target.value)
    setEndTime(e.target.value)
  }

  const handleSubmit = e => {
    let teacherId = teacher.id
    e.preventDefault();
    let reqBody = {teacherId, startTime, endTime, dayId}
    createTeacherWeek(reqBody)
    handleClose()
  }

  return (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h4' gutterBottom >Add Weekly Availability </Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="instrument">Day of the Week</InputLabel>
          <Select
          labelId="day-of-week"
          id="day"
          value={dayId}
          onChange={handleDayId}>
            <MenuItem value={0}>Day of the Week</MenuItem>
            {days.map(day => (
              <MenuItem value={day[0]}>{day[1]}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TimePicker value={startTime} handleStartTime={handleStartTime} label={"Start Time"} />
        <TimePicker value={endTime} handleEndTime={handleEndTime} label={"End Time"} />
        <Button color='primary' variant='contained' type='submit'>Add Availability</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </form>
    </Container>
  )
}

export default AddTeacherWeek