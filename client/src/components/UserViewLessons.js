import React from 'react';
import { Container, Typography } from '@material-ui/core';
import UserLessonsTable from '../containers/UserLessonsTable';



const UserViewLessons = (props) => {
  return(
    <Container>
      <h1>
        Your Subscriptions
      </h1>
      <h1>
        Lesson Schedule
      </h1>
      <UserLessonsTable />
    </Container>
  )
}

export default UserViewLessons