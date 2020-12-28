USE employee_tracker_db;

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
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (11, "Mr.", "Hugsy", 6, 1);



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
INSERT INTO role(id, title, salary, department_id)
VALUES (7, "Towel Boy", 50, 2);

INSERT INTO department(name)
VALUES ("Management");
INSERT INTO department(name)
VALUES ("Player");
INSERT INTO department(department_name)
VALUES ("Owner");
INSERT INTO department(department_name)
VALUES ("Space Cowboy");