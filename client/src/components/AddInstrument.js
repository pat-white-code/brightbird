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

const AddInstrument = (props) => {
  const classes = useStyles();
  const [instrumentId, setInstrumentId] = useState(0);
  const [minAge, setMinAge] = useState(0);
  const [maxExp, setMaxExp] = useState(100);

  const {teacher, addLesson } = props;


  const handleInstrumentId = e => {
    console.log('INSTRUMENT ID: ',instrumentId)
    setInstrumentId(e.target.value)
  }

  const handleMaxExp = e => {
    console.log('Max exp:', maxExp)
    setMaxExp(e.target.value)
  }
  const handleMinAge = e => {
    console.log('Min Age:', minAge)
    setMinAge(e.target.value)
  }


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   let studentAge = Math.abs(moment(props.student.dob).diff(moment(), 'years'));
  //   props.addRequest({
  //     instrumentId, addressId, experience, lessonDuration, studentId: props.student.id, studentAge
  //   })
  //   props.handleClose()
  // }

  return (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h4' gutterBottom >{`Add Instrument`} </Typography>
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
          <InputLabel id="minAge">Minimum Age</InputLabel>
          <Select
            labelId="min-age"
            id="min-age"
            value={minAge}
            onChange={handleMinAge}>
              <MenuItem value={0}>Beginner/Novice</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="max-exp">Maximum Experience</InputLabel>
            <Select
            labelId="max-exp-select"
            id="max-exp"
            value={maxExp}
            onChange={handleMaxExp}>
              <MenuItem value={1}>1 years</MenuItem>
              <MenuItem value={2}>2 years</MenuItem>
              <MenuItem value={3}>3 years</MenuItem>
              <MenuItem value={4}>4 years</MenuItem>
              <MenuItem value={5}>5 years</MenuItem>
              <MenuItem value={6}>6 years</MenuItem>
              <MenuItem value={7}>7 years</MenuItem>
              <MenuItem value={8}>8 years</MenuItem>
              <MenuItem value={9}>9 years</MenuItem>
              <MenuItem value={10}>10 years</MenuItem>
          </Select>
        </FormControl>
        <Button color='primary' variant='contained' type='submit'>Add Instrument</Button>
        <Button>Cancel</Button>
      </form>
    </Container>
  )
}

export default AddInstrument;