import React from 'react';


const TeacherLessons = () => {
  useEffect(()=>{
    // get lessons by teacher
  }, [])
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