import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import SubCard from '../containers/SubCard';
import { makeStyles } from '@material-ui/core/styles';
import { userLogin, getUserSubscriptions } from '../redux/actions';

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
  const { 
    subscriptions,
    dbUpdatedAt,
    userId
  } = props;
  
  const classes = useStyles();
  useEffect(() =>{
    getUserSubscriptions(userId)
  }, [dbUpdatedAt])

  return (
    <Grid container className={classes.root} spacing={2}>
      {subscriptions.map(sub => (
        <Grid key={sub.id} item sm={6} xs={12} md={3} >
          <SubCard sub={sub} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserSubscriptions;