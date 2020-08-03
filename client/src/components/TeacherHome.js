import React from 'react';
import ViewInstruments from '../containers/ViewInstruments';
import { Container, Typography } from '@material-ui/core';
import EditServices from './EditServices';
import TeacherWeek from '../containers/TeacherWeek';
import TeacherSchedule from '../containers/TeacherSchedule';
import TeacherLessons from '../containers/TeacherLessons';

const TeacherHome = (props) => {
  const {teacher} = props;
  return (
    <Container>
      { teacher.first_name && (
        <Typography variant={'h4'} gutterBottom>
          {`Welcome, ${teacher.info.first_name}`}
        </Typography>
      )}
      <ViewInstruments />
      <EditServices teacher={teacher}/>
      <TeacherWeek />
      <TeacherSchedule />
      <TeacherLessons />
    </Container>
  )
}

export default TeacherHome;