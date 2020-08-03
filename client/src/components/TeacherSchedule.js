import React, { useEffect } from 'react';
import TeacherSubsTable from './TeacherSubsTable';
import { Container, Typography } from '@material-ui/core';

const TeacherSchedule = props => {
  const { getSubsByTeacher, subs, teacher, subsUpdatedAt } = props;

  useEffect(()=>{
    getSubsByTeacher(teacher.id)
  }, [teacher.id, subsUpdatedAt])

  return (
    <div>
      <Container>
        <Typography variant={'h4'} gutterBottom>Current Schedule</Typography>
        <TeacherSubsTable subs={subs} />
      </Container>
    </div>
  )
}

export default TeacherSchedule;