import React from 'react';
import ViewInstruments from '../containers/ViewInstruments';
import { Container } from '@material-ui/core';

const TeacherHome = () => {

  return (
    <Container>
      <h1>Hello Teacher! You are Home!</h1>
      <ViewInstruments />
    </Container>
  )
}

export default TeacherHome;