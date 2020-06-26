import React from 'react';
import ViewInstruments from '../containers/ViewInstruments';
import { Container } from '@material-ui/core';
import EditServices from './EditServices';
import TeacherWeek from './TeacherWeek';

const TeacherHome = (props) => {
  const {teacher} = props;
  return (
    <Container>
      <h1>Hello Teacher! You are Home!</h1>
      <ViewInstruments />
      <EditServices teacher={teacher}/>
      <TeacherWeek />
    </Container>
  )
}

export default TeacherHome;