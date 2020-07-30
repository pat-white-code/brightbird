import React, { useEffect } from 'react';
import TeacherSubsTable from './TeacherSubsTable';

const TeacherSchedule = props => {
  const { getSubsByTeacher, subs, teacher, subsUpdatedAt } = props;

  useEffect(()=>{
    getSubsByTeacher(teacher.id)
  }, [teacher.id, subsUpdatedAt])

  return (
    <div>
      <h1>Current Schedule</h1>
      <TeacherSubsTable subs={subs} />
    </div>
  )
}

export default TeacherSchedule;