-- given a teacher's id, show their scheduled days of availability

SELECT date_, start_from, end_by
FROM schedules
JOIN teachers
	ON schedules.teacher_id = teachers.id
WHERE teachers.id = 1;