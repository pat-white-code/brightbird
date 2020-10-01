CREATE TABLE recurring_schedules (
	id int NOT NULL AUTO_INCREMENT,
    day_id int(11),
    start_time TIME,
    end_time TIME,
    start_date DATE,
    teacher_id int(11),
   PRIMARY KEY(id),
   FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);