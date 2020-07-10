import React from 'react';
import { Container, Typography } from '@material-ui/core';
import UserLessonsTable from '../containers/UserLessonsTable';
import UserSubscriptions from '../containers/UserSubscriptions';



const UserViewLessons = () => {
  return(
    <Container>
      <h1>
        Your Subscriptions
      </h1>
      <UserSubscriptions />
      <h1>
        Upcoming Lessons
      </h1>
      <UserLessonsTable />
    </Container>
  )
}

export default UserViewLessons