import React, { useEffect } from 'react';

const TeacherSchedule = props => {
  const { getSubsByTeacher, subs, teacher } = props;

  useEffect(()=>{
    getSubsByTeacher(teacher.id)
  }, [teacher.id])

  return (
    <div>
      <h1>Current Schedule</h1>
    </div>
  )
}

export default TeacherSchedule;