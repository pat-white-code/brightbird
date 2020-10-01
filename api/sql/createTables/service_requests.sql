CREATE TABLE service_requests (
	id int NOT NULL AUTO_INCREMENT,
    student_id int(11),
    instrument_id int(11),
    lesson_duration int(11),
    student_age int(11),
    address_id int(11),
    experience int(11),
    is_active BOOLEAN,
   PRIMARY KEY(id),
   FOREIGN KEY (student_id) REFERENCES students(id),
   FOREIGN KEY (instrument_id) REFERENCES instruments(id),
   FOREIGN KEY (address_id) REFERENCES addresses(id)
);