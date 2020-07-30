import React, { useState } from 'react';
import { Button, Typography, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import moment from 'moment';
import TimePicker from './TimePicker';


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

const EditSub = (props) => {
  const { 
    sub,
    handleClose
  } = props;
  // const { dayId, time, lesson_duration, address_id, student_id, teacher_id, instrument_id, id } = sub;
  // instrument
  // lesson duration  
  const classes = useStyles();
  const [dayId, setDayId] = useState(sub.day_id);
  const [time, setTime] = useState(sub.time_);
  const [lessonDuration, setLessonDuration] = useState(sub.lesson_duration);
  const [instrumentId, setInstrumentId] = useState(sub.instrument_id);


  const handleDayId = e => {
    console.log('DAY ID: ', dayId)
    setDayId(e.target.value)
  }

  const handleTime = e => {
    console.log('TIME:', time)
    setTime(e.target.value)
  }

  const handleLessonDuration = e => {
    console.log('LESSON DURATION:', lessonDuration)
    setLessonDuration(e.target.value)
  }

  const handleInstrumentId = e => {
    console.log('INSTRUMENT', instrumentId);
    setInstrumentId(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(time);
    let updatedSub = {
      address_id: sub.address_id, 
      student_id: sub.student_id,
      teacher_id: sub.teacher_id, 
      dayId, 
      time,
      lesson_druation: lessonDuration,
      instrument_id: instrumentId,
      subscriptionId: sub.id
    }
    console.log('UPDATED SUB', updatedSub);
    handleClose()
  }

  return (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h4' gutterBottom >{`Edit Subscription for ${sub.first_name}`} </Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl className={classes.formControl}>
          <InputLabel id="day-of-week">Day of the Week</InputLabel>
          <Select
          labelId="day-of-week-select"
          id="day-of-week"
          value={dayId}
          onChange={handleDayId}>
            <MenuItem value={0}>Day of the Week</MenuItem>
            <MenuItem value={1}>Mondays</MenuItem>
            <MenuItem value={2}>Tuesdays</MenuItem>
            <MenuItem value={3}>Wednesdays</MenuItem>
            <MenuItem value={4}>Thursdays</MenuItem>
            <MenuItem value={5}>Fridays</MenuItem>
            <MenuItem value={6}>Saturdays</MenuItem>
            <MenuItem value={7}>Sundays</MenuItem>
          </Select>
        </FormControl>
        <TimePicker value={time} handleChange={handleTime} label={"Start Time"} />
        <FormControl className={classes.formControl}>
            <InputLabel id="lesson-duration">Preferred Lesson Duration</InputLabel>
            <Select
            labelId="lesson-duration-select"
            id="lesson-duration"
            value={lessonDuration}
            onChange={handleLessonDuration}>
              <MenuItem value={30}>30-Min</MenuItem>
              <MenuItem value={45}>45-Min</MenuItem>
              <MenuItem value={60}>60-Min</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="instrument">Instrument</InputLabel>
          <Select
          labelId="instrument-select"
          id="instrument"
          value={instrumentId}
          onChange={handleInstrumentId}>
            <MenuItem value={0}>Select Instrument</MenuItem>
            <MenuItem value={1}>Piano</MenuItem>
            <MenuItem value={2}>Guitar</MenuItem>
            <MenuItem value={3}>Drums</MenuItem>
            <MenuItem value={4}>Voice</MenuItem>
            <MenuItem value={5}>Violin</MenuItem>
            <MenuItem value={6}>Bass Guitar</MenuItem>
            <MenuItem value={7}>Ukulele</MenuItem>
            <MenuItem value={8}>Early Music Enrichment</MenuItem>
          </Select>
        </FormControl>
        <Button color='primary' variant='contained' type='submit'>Update Subscription</Button>
        <Button>Cancel</Button>
      </form>
    </Container>
  )
}

export default EditSub