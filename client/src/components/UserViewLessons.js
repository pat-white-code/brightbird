import React from 'react';
import { Container } from '@material-ui/core';
import UserLessonsTable from '../containers/UserLessonsTable';



const UserViewLessons = (props) => {
  return(
    <Container>
      <UserLessonsTable />
    </Container>
  )
}

export default UserViewLessons