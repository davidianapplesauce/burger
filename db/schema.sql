CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(25) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 

);