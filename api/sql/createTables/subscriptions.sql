CREATE TABLE subscriptions (
	id int NOT NULL AUTO_INCREMENT,
    student_id int(11),
    teacher_id int(11),
    day_id int(11),
    time_ TIME,
    start_date DATE,
    end_date DATE,
    instrument_id int(11),
    transfer_id int(11),
    lesson_price int(11),
    lesson_duration int(11),
    address_id int(11),
    time_created DATETIME,
    active BOOLEAN DEFAULT TRUE,
	FOREIGN KEY (teacher_id) REFERENCES teachers(id), 
	FOREIGN KEY (student_id) REFERENCES students(id), 
	FOREIGN KEY (instrument_id) REFERENCES instruments(id),
	FOREIGN KEY (day_id) REFERENCES days(id),
	FOREIGN KEY (addreess_id) REFERENCES addresses(id)
);