import React from 'react';
import { Grid } from '@material-ui/core';
import SubCard from './SubCard';

const UserSubscriptions = (props) => {
  // connect to state
  const { subscriptions } = props;
  return (
    <Grid container >
      {subscriptions.map(sub => (
        <SubCard sub={sub} />
      ))}
    </Grid>
  )
}

export default UserSubscriptions;