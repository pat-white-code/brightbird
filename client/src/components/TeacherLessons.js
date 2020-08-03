import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import TeacherLessonsTable from './TeacherLessonsTable';

const TeacherLessons = (props) => {
  const {
    lessons, 
    getLessonsByTeacher, 
    subsUpdatedAt,
    teacherId,
    lessonsUpdatedAt
  } = props;

  useEffect(()=>{
    getLessonsByTeacher(teacherId)
  }, [teacherId, subsUpdatedAt, lessonsUpdatedAt])
  return (
    <div>
      <Container>
        <Typography variant={'h4'} gutterBottom>
          Upcoming Lessons
        </Typography>
        <TeacherLessonsTable lessons={lessons} />
      </Container>
    </div>
  )
}

export default TeacherLessons;