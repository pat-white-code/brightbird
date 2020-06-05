SELECT *
FROM teachers
JOIN teacher_instruments
	ON teachers.id = teacher_instruments.teacher_id;
