CREATE TABLE clients (
	id int NOT NULL AUTO_INCREMENT,
    first_name char(50),
    last_name char(50),
    email varchar(250),
    password varchar(255),
   PRIMARY KEY(id)
);