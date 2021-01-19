USE employeeTracker_db;

INSERT INTO department (name)
VALUES ("Accounting"), ("R&D"), ("QA"), ("Engineering"), ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", "80000", "1"),
("Lab Technician", "70000", "2"),
("Senior R&D Scientist", "135000", "2"),
("Junior Tester", "55000", "3"),
("Senior QA Analyst", "110000", "3"),
("Engineer", "95000", "4"),
("Lead Engineer", "140000", "4"),
("Digital Marketing Specialist", "70000", "5"),
("Marketing Director", "130000", "5");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rochelle", "Lecuyer", "1", NULL),
("Karsten", "Schroder", "3", NULL),
("Cadeyrn", "Pennoyer", "5", NULL),
("Edgarda", "Whittemoree", "7", NULL),
("Patrizio", "Moretti", "9", NULL),
("Valda", "Stanley", "2", "2"),
("Mirabelle", "Parks", "4", "3"),
("Masahiro", "Okita", "6", "4"),
("Venedikt", "Sokolov", "8", "5");
