DROP DATABASE IF EXISTS nsuns_db;
CREATE DATABASE nsuns_db;
USE nsuns_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
exercise VARCHAR(40),
pounds INTEGER(20),
reps INTEGER(20),
sets INTEGER(20),
PRIMARY KEY (id)

);

CREATE TABLE departments(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(20),
    overhead_costs INTEGER(10),
    PRIMARY KEY(department_id)
);

INSERT INTO departments(department_name, overhead_costs)
VALUES 
    ('Book', 20000),
    ('Furniture', 45000),
    ('Movie', 25000),
    ('Computer',100000)
INSERT INTO products(product_name, department_name, price, quantity)
VALUES 
    ("Office Chair", "Furniture", 150, 2000),
    ("Bible", "Book", 10.99, 10000),
    ("Harry Potter", "Book", 22.85, 3500),
    ("Office Space", "Movie", 12.50, 8734),
    ("The Will of the Gods", "Movie", 4.25, 6),
    ("GeForce GTX 1080", "Computer", 800.99, 1000),
    ("MacBook Charger", "Computer", 51.24, 5678),
    ("Queen-size Bedframe", "Furniture", 150, 700),
    ("The Land Before Time", "Movie", 15, 2000)