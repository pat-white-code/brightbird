-- given a student id, show all lessons for that student

SELECT date_, duration, instruments.instrument_name, start_time, end_time, teachers.first_name, teachers.last_name 
FROM students
JOIN lessons
	ON lessons.student_id = students.id
JOIN teachers
	on lessons.teacher_id = teachers.id
JOIN instruments
	on lessons.inst_id = instruments.id
WHERE students.id = 1;