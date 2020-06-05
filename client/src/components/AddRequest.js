import React, {useState } from 'react';
import { Button, Typography, Container, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import moment from 'moment';


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

const AddRequest = (props) => {
  // instrument
  // lesson duration
  const classes = useStyles();
  const [instrumentId, setInstrumentId] = useState(0);
  const [experience, setExperience] = useState(0);
  const [lessonDuration, setLessonDuration] = useState(30);
  const [addressId, setAddressId] = useState(props.user.addresses[0].id)


  const handleInstrumentId = e => {
    console.log('INSTRUMENT ID: ',instrumentId)
    setInstrumentId(e.target.value)
  }

  const handleExperience = e => {
    console.log('Experience:', experience)
    setExperience(e.target.value)
  }
  const handleLessonDuration = e => {
    console.log('LESSON DURATION:', lessonDuration)
    setLessonDuration(e.target.value)
  }

  const handleAddressId = e => {
    console.log('ADDRESS', addressId);
    setAddressId(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    let studentAge = Math.abs(moment(props.student.dob).diff(moment(), 'years'));
    props.addRequest({
      instrumentId, addressId, experience, lessonDuration, studentId: props.student.id, studentAge
    })
    props.handleClose()
  }

  return (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h4' gutterBottom >{`Add Lesson for ${props.student.first_name}`} </Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
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
        <FormControl className={classes.formControl}>
          <InputLabel id="experience">Years of Experience</InputLabel>
          <Select
            labelId="experience-select"
            id="experience"
            value={experience}
            onChange={handleExperience}>
              <MenuItem value={0}>Beginner/Novice</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8+</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="lesson-duration">Preferred Lesson Duration</InputLabel>
            <Select
            labelId="lesson-duration-select"
            id="lesson-duration"
            value={lessonDuration}
            onChange={handleLessonDuration}>
              <MenuItem value={30}>30-Min ($40) </MenuItem>
              <MenuItem value={45}>45-Min ($56) </MenuItem>
              <MenuItem value={60}>60-Min ($72) </MenuItem>
          </Select>
          <FormHelperText>Lessons providede Weekly</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select 
            labelId="address-select"
            id="address"
            value={addressId}
            onChange={handleAddressId}>
            {props.user.addresses.map(address => (
              <MenuItem key={address.id} value={address.id}>{address.address}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button color='primary' variant='contained' type='submit'>Add Request</Button>
        <Button>Cancel</Button>
      </form>
    </Container>
  )
}

export default AddRequest