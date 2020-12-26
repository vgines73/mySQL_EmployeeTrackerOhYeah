DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)

);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2),
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, "Vincent", "Gines", 1, NULL);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (2, "Michael", "Jordan", 3, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (3, "Kobe", "Bryant", 3, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (4, "Lebron", "James", 4, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (5, "Kevin", "Durant", 4, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (6, "Stephen", "Curry", 2, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (7, "Allen", "Iverson", 2, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (8, "Trae", "Young", 2, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (9, "Luka", "Doncic", 2, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (10, "Wilt", "Chamberlain", 6, 1);



INSERT INTO role(id, title, salary, department_id)
VALUES (1, "Manager", 50000, 1);
INSERT INTO role(id, title, salary, department_id)
VALUES (2, "Point Guard", 50000, 2);
INSERT INTO role(id, title, salary, department_id)
VALUES (3, "Shooting Guard", 50000, 2);
INSERT INTO role(id, title, salary, department_id)
VALUES (4, "Small Forward", 50000, 2);
INSERT INTO role(id, title, salary, department_id)
VALUES (5, "Power Forward", 50000, 2);
INSERT INTO role(id, title, salary, department_id)
VALUES (6, "Center", 50000, 2);

INSERT INTO department(department_name)
VALUES ("Management");
INSERT INTO department(department_name)
VALUES ("Player");

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;
SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department_name, employee.manager_id
FROM employee
INNER JOIN role ON employee.role_id = role.id
INNER JOIN department ON role.department_id = department.id;