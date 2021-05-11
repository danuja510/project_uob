CREATE USER 'projectuob'@'project-uob.cg1pnrh4hoyv.us-east-2.rds.amazonaws.com' IDENTIFIED BY 'projectuob';

GRANT ALL PRIVILEGES ON * . * TO 'projectuob'@'project-uob.cg1pnrh4hoyv.us-east-2.rds.amazonaws.com';

ALTER USER 'projectuob'@'project-uob.cg1pnrh4hoyv.us-east-2.rds.amazonaws.com' IDENTIFIED WITH mysql_native_password BY 'projectuob';