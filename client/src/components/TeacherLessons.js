import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import TeacherLessonsTable from './TeacherLessonsTable';

const TeacherLessons = (props) => {
  const {
    lessons, 
    getLessonsByTeacher, 
    subsUpdatedAt,
    teacherId
  } = props;

  useEffect(()=>{
    getLessonsByTeacher(teacherId)
  }, [teacherId, subsUpdatedAt])
  return (
    <div>
      <Container>
        <h1>
          Upcoming lessons
        </h1>
        <TeacherLessonsTable lessons={lessons} />
      </Container>
    </div>
  )
}

export default TeacherLessons;