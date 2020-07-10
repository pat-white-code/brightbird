import React from 'react';
import { Grid } from '@material-ui/core';
import SubCard from './SubCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const UserSubscriptions = (props) => {
  
  const classes = useStyles();

  const { subscriptions } = props;
  return (
    <Grid container className={classes.root} spacing={2}>
      {subscriptions.map(sub => (
        <Grid item sm={6} xs={12} md={3} >
          <SubCard sub={sub} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserSubscriptions;