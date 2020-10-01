CREATE TABLE students (
	id int NOT NULL AUTO_INCREMENT,
    client_id int(11),
    first_name char(50),
    last_name char(50),
    dob DATE,
    active BOOLEAN default TRUE,
    address_id int(11),
   PRIMARY KEY(id),
   FOREIGN KEY (client_id) REFERENCES clients(id),
   FOREIGN KEY (address_id) REFERENCES addresses(id)
);