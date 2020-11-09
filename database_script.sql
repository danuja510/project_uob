CREATE SCHEMA `project_uob` ;

CREATE TABLE `project_uob`.`student` (
  `student_number` INT NOT NULL,
  `student_first_name` VARCHAR(45) NOT NULL,
  `student_last_name` VARCHAR(45) NULL,
  `student_email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `is_active` TINYINT NOT NULL,
  PRIMARY KEY (`student_number`));

  CREATE TABLE `project_uob`.`student_details` (
  `student_number` INT NOT NULL,
  `student_telephone` INT NULL,
  `student_address` VARCHAR(100) NULL,
  `student_education_level` VARCHAR(50) NULL,
  `student_dob` DATE NULL,
  PRIMARY KEY (`student_number`),
  CONSTRAINT `student_number`
    FOREIGN KEY (`student_number`)
    REFERENCES `project_uob`.`student` (`student_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
