-- select teachers who teach my instrument of choice, at my childs age, in our zip code

SELECT first_name, last_name, instrument_name
FROM teachers
JOIN teacher_instruments
	ON teachers.id = teacher_instruments.teacher_id
JOIN zip_codes
	ON teachers.id = zip_codes.teacher_id
JOIN instruments
	ON instruments.id = teacher_instruments.inst_id
-- student info here 
-- instrumentQuery goes here... 
WHERE inst_id = 1
-- zip code query goes here 
 	AND zip_code = 78746
-- student age query goes here...
	AND teacher_instruments.min_age <= 5;
    