import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BrightBird.
          </Typography>
          <Button color="inherit" className={classes.menuButton} onClick={()=>{
            axios.get('/test')
              .then(res => console.log(res))
            }}>Test Server</Button>
          <Link to="/login"><Button color="inherit" className={classes.menuButton}>Login</Button></Link>
          <Link to="/availability"><Button color="inherit" className={classes.menuButton}>Availability</Button></Link>
          <Link to="/requests"><Button color="inherit" className={classes.menuButton}>View Requests</Button></Link>
          <Link to="/signup/parent"><Button color="secondary" variant='contained'>Sign up Free</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}