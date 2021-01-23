CREATE USER 'projectuob'@'localhost' IDENTIFIED BY 'projectuob';

GRANT ALL PRIVILEGES ON * . * TO 'projectuob'@'localhost';

ALTER USER 'projectuob'@'localhost' IDENTIFIED WITH mysql_native_password BY 'projectuob';