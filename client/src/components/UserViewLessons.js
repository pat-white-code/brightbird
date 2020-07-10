import React from 'react';
import { Container, Typography } from '@material-ui/core';
import UserLessonsTable from '../containers/UserLessonsTable';
import SamplePagination from './SamplePagination';



const UserViewLessons = (props) => {
  return(
    <Container>
      <h1>
        Lesson Schedule
      </h1>
      <UserLessonsTable />
      {/* <SamplePagination /> */}
    </Container>
  )
}

export default UserViewLessons