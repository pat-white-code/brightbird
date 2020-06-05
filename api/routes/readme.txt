Routes:

  /teachers

  this route expects 3 queries:
  req.query.instId //student instrument

  req.query.zipCode //zipcode of the student/client

  req.query.studentAge //age of student

  this routes returns all teachers who teach the desired instrument, in the student zip code, who teach at the student age level

  /teachers/all returns all teachers, and shows all teacher instruments and service areas

  /schedules/:teacher_id 

  this route returns days where the teacher with teacher_id is working

  /lessons/:schedule_id

  //give a schedule_id, this route returns all lessons that are scheduled that day