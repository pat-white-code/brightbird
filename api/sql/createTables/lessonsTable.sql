CREATE TABLE lessons (
	id int NOT NULL AUTO_INCREMENT,
    day_time datetime,
    duration int(11),
    student_id int(11),
    inst_id int(11),
    subscriotion_id int(11),
    price int(11),
    tandem BOOLEAN DEFAULT FALSE,
    date_ DATE,
    address_id int(11),
    status_id int(11),
   PRIMARY KEY(id),
   FOREIGN KEY (student_id) REFERENCES students(id), 
   FOREIGN KEY (inst_id) REFERENCES instruments(id),
   FOREIGN KEY (subscriptoin_id) REFERENCES subscriptions(id),
   FOREIGN KEY (addreess_id) REFERENCES addresses(id)
);