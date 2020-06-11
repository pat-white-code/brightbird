import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  },
  button: {
    width: '100%'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const {teacherCredentials} = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e)=> {
    console.log('USERNAME :', username)
    setUsername(e.target.value)
  }

  const handlePassword = (e)=> {
    // console.log('PASSWORD :', password)
    setPassword(e.target.value)
  }

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>Teacher Login</Typography>
      <form className={classes.root} noValidate autoComplete="off" 
            onSubmit={()=> {
              {/* e.preventDefault(); */}
              teacherCredentials({email: username, password})
              history.push('/teacher/home')
              }}>
        <TextField id="username" label="Username" onChange={handleUsername} required />
        <TextField id="password" label="Password" type='password' onChange={handlePassword} required />
        <Button className={classes.button} type='submit'>Submit</Button>
      </form>
    </Container>
  );
}