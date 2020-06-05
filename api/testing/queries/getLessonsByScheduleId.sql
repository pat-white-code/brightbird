-- given a teacher's lesson day, show their start time, end time, and scheduled lessons

SELECT teachers.first_name, teachers.last_name, schedules.date_, start_from, end_by, day_time, duration, students.first_name, students.last_name
FROM lessons
JOIN schedules
	ON lessons.schedule_id = schedules.id
JOIN students
	ON lessons.student_id = students.id
JOIN teachers
	ON lessons.teacher_id = teachers.id
WHERE schedules.id = 1;