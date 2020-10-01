CREATE TABLE addresses (
	id int NOT NULL AUTO_INCREMENT,
    address char(100),
    client_id int(11) NOT NULL,
    street_no int(11),
    street char(50),
    line_2 char(50),
    zip_code varchar(11),
    city char(50),
    state char(2),
   PRIMARY KEY(id),
   FOREIGN KEY (client_id) REFERENCES clients(id)
);