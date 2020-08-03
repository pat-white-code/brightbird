import React, { useEffect } from 'react';
import TeacherSubsTable from './TeacherSubsTable';
import { Container } from '@material-ui/core';

const TeacherSchedule = props => {
  const { getSubsByTeacher, subs, teacher, subsUpdatedAt } = props;

  useEffect(()=>{
    getSubsByTeacher(teacher.id)
  }, [teacher.id, subsUpdatedAt])

  return (
    <div>
      <Container>
        <h1>Current Schedule</h1>
        <TeacherSubsTable subs={subs} />
      </Container>
    </div>
  )
}

export default TeacherSchedule;