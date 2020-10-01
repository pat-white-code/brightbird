CREATE TABLE instruments (
	id int NOT NULL AUTO_INCREMENT,
    instrument_name char(50),
   PRIMARY KEY(id)
   -- FOREIGN KEY (client_id) REFERENCES clients(id) 
);
