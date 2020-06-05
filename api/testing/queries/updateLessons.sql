SELECT * FROM lessons;

UPDATE lessons
set date_ = '2020-02-13',
	start_time = '17:00:00',
    end_time = '17:30:00'
WHERE id = 4;
