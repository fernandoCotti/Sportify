CREATE DATABASE ng_sportify_db;

USE ng_sportify_db;

CREATE TABLE product(  
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE product;