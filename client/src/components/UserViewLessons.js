import React from 'react';
import { Container } from '@material-ui/core';
import UserLessonsTable from './UserLessonsTable';



const UserViewLessons = (props) => {
  return(
    <Container>
      <UserLessonsTable />
    </Container>
  )
}

export default UserViewLessons