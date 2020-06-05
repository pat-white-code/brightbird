import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ParentForm(props) {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleFirstName = e => {
    console.log(firstName)
    setFirstName(e.target.value)
  }
  const handleLastName = e => {
    console.log(lastName)
    setLastName(e.target.value)
  }
  const handleEmail = e => {
    console.log(email)
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    console.log(password)
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users', {firstName, lastName, password, email})
      .then(res => props.initialLogin(res.data.id))
      .then(()=> history.push('/signup/address'))
      .catch(err=> setErr(err.response.data));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField id='firstName' label="First Name" onChange={handleFirstName} />
      <TextField id='lastName' label="Last Name" onChange={handleLastName} />
      <TextField id='email' label="Email Address" onChange={handleEmail} required />
      <TextField id='password' type='password' label='Password' onChange={handlePassword} />
      <TextField id='confirm-password' type='password' label='Confirm Password' />
      <Button variant='contained' color='secondary' type='submit'>Next </Button>
      { err && (
        <Typography color='error' align="center">{err}</Typography>
      )}
    </form>
  );
}