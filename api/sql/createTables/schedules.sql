CREATE TABLE schedules (
	id int NOT NULL AUTO_INCREMENT,
    teacher_id int(11),
    date_ DATE,
    start_time DATETIME,
    end_time DATETIME,
    day_of_week int(11),
    recurring_schedule_id int(11),
   PRIMARY KEY(id),
   FOREIGN KEY (teacher_id) REFERENCES teachers(id),
   FOREIGN KEY (day_of_week) REFERENCES days(id),
   FOREIGN KEY (recurring_schedule_id) REFERENCES recurring_schedule(id)
);