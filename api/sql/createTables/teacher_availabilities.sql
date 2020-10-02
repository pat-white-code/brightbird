CREATE TABLE teacher_availabilities (
	id int NOT NULL AUTO_INCREMENT,
    request_id int(11),
    teacher_id int(11),
    start_time_stamp DATETIME,
	FOREIGN KEY (request_id) REFERENCES service_requests(id), 
	FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);