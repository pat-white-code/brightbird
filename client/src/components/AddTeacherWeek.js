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

const EditRequest = (props) => {
  const { 
    handleClose,
    days
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
    e.preventDefault();
    // let studentAge = Math.abs(moment(request.dob).diff(moment(), 'years'));
    // console.log('STUDENT AGE', studentAge)
    // editRequest({instrumentId, addressId, experience, lessonDuration, studentAge, requestId: request.id})
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
        <FormControl className={classes.formControl}>
          <InputLabel id="experience">Years of Experience</InputLabel>
          <Select
            labelId="experience-select"
            id="experience"
            value={0}
            onChange={handleDayId}>
              <MenuItem value={0}>Beginner/Novice</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="lesson-duration">Preferred Lesson Duration</InputLabel>
            <Select
            labelId="lesson-duration-select"
            id="lesson-duration"
            value={30}
            onChange={handleDayId}>
              <MenuItem value={30}>30-Min ($40) </MenuItem>
              <MenuItem value={45}>45-Min ($56) </MenuItem>
              <MenuItem value={60}>60-Min ($72) </MenuItem>
          </Select>
          <FormHelperText>Lessons providede Weekly</FormHelperText>
        </FormControl>
        <Button color='primary' variant='contained' type='submit'>Update Request</Button>
        <Button>Cancel</Button>
      </form>
    </Container>
  )
}

export default EditRequest