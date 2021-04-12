CREATE SCHEMA `project_uob` ;

CREATE TABLE `project_uob`.`student` (
  `student_number` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(255) DEFAULT NULL,
  `student_first_name` VARCHAR(45) NOT NULL,
  `student_last_name` VARCHAR(45) NULL,
  `student_email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `is_active` bit NOT NULL default 1,
  `image_url` varchar(200) null,
  `date_joined` date not null,
  PRIMARY KEY (`student_number`));
  
  #insert into student (`student_number`,`slug`,`student_first_name`,`student_last_name`,`student_email`,`password`,`image_url`,`date_joined`) values (1,'danuja','danuja','kalugamaarachchi', 'danuja.kalugamaarachchi@gmail.com', '1234', '', curdate())

CREATE TABLE `project_uob`.`student_details` (
	`no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `student_number` BIGINT(20) NOT NULL,
  `student_telephone` INT NULL,
  `student_address` VARCHAR(100) NULL,
  `student_education_level` VARCHAR(50) NULL,
  `student_dob` DATE NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `student_number`
    FOREIGN KEY (`student_number`)
    REFERENCES `project_uob`.`student` (`student_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
   ##insert into student_details (`student_number`,`student_telephone`,`student_address`,`student_education_level`) values (1,01771920168,"Nawalapitiya","HND")
  
    
CREATE TABLE `project_uob`.`teacher` (
  `teacher_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(255) DEFAULT NULL,
  `teacher_first_name` VARCHAR(45) NOT NULL,
  `teacher_last_name` VARCHAR(45) NULL,
  `teacher_email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `is_active` BIT not null default 1,
  `image_url` varchar(200) null,
  `date_joined` date not null,
  PRIMARY KEY (`teacher_id`));
  
  
CREATE TABLE `project_uob`.`teacher_details` (
`no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `teacher_id` BIGINT(20) NOT NULL,
  `teacher_telephone` INT NULL,
  `teacher_address` VARCHAR(100) NULL,
  `teacher_zoom_id` VARCHAR(200) NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `teacher_id`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    
    
CREATE TABLE `project_uob`.`teacher_experience` (
  `no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `teacher_id` BIGINT(20) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `from` DATE NOT NULL,
  `to` DATE NULL,
  `currently_working` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`no`), CONSTRAINT `teacher_experience_id`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
  

CREATE TABLE `project_uob`.`subject` (
  `subject_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `subject_name` VARCHAR(50) NULL,
  `subject_description` VARCHAR(45) NULL,
  `is_active` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`subject_id`));
  

CREATE TABLE `project_uob`.`teacher_subject` (
  `no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `teacher_id` BIGINT(20) NOT NULL,
  `subject_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`no`),
  INDEX `teacher_id_idx` (`teacher_id` ASC) VISIBLE,
  INDEX `subject_id_idx` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `teacher_subject_id`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `subject_teacher_id`
    FOREIGN KEY (`subject_id`)
    REFERENCES `project_uob`.`subject` (`subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`course` (
  `course_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `course_name` VARCHAR(100) NOT NULL,
  `course_description` VARCHAR(200) NULL,
  `is_active` BIT NOT NULL DEFAULT 1,
  `per_session_price` FLOAT NOT NULL,
  `image_url` varchar(200) null,
  `date_created` date not null,
  `last_modified` date not null,
  PRIMARY KEY (`course_id`));
  

CREATE TABLE `project_uob`.`course_subject` (
  `no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `course_id` BIGINT(20) NULL,
  `subject_id` BIGINT(20) NULL,
  PRIMARY KEY (`no`),
  INDEX `course_subject_fk1_idx` (`course_id` ASC) VISIBLE,
  INDEX `course_subject_fk2_idx` (`subject_id` ASC) VISIBLE,
  CONSTRAINT `course_subject_fk1`
    FOREIGN KEY (`course_id`)
    REFERENCES `project_uob`.`course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_subject_fk2`
    FOREIGN KEY (`subject_id`)
    REFERENCES `project_uob`.`subject` (`subject_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `project_uob`.`course_teacher` (
  `no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `course_id` BIGINT(20) NOT NULL,
  `teacher_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`no`),
  INDEX `course_teacher_idx` (`teacher_id` ASC) VISIBLE,
  INDEX `course_teacher_fk2_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `course_teacher_fk1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_teacher_fk2`
    FOREIGN KEY (`course_id`)
    REFERENCES `project_uob`.`course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`course_enrollment` (
  `no` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `course_id` BIGINT(20) NOT NULL,
  `student_id` BIGINT(20) NOT NULL,
  `enrollment_date` DATE NOT NULL,
  `no_of_sessions` INT NOT NULL,
  PRIMARY KEY (`no`),
  INDEX `course_enrollent_fk1_idx` (`course_id` ASC) VISIBLE,
  INDEX `course_enrollent_fk2_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `course_enrollent_fk1`
    FOREIGN KEY (`course_id`)
    REFERENCES `project_uob`.`course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_enrollent_fk2`
    FOREIGN KEY (`student_id`)
    REFERENCES `project_uob`.`student` (`student_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`course_tag` (
  `id` BIGINT NOT NULL,
  `course_id` BIGINT NULL,
  `tag` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  INDEX `course_id_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `course_id`
    FOREIGN KEY (`course_id`)
    REFERENCES `project_uob`.`course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`teacher_tag` (
  `id` BIGINT NOT NULL,
  `teacher_id` BIGINT NULL,
  `tag` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  INDEX `teacher_id_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `teacher_id_fk`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`course_rating` (
  `id` BIGINT NOT NULL,
  `student_id` BIGINT NOT NULL,
  `course_id` BIGINT NOT NULL,
  `rating` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `course_id_idx` (`course_id` ASC) VISIBLE,
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `course_id_fk`
    FOREIGN KEY (`course_id`)
    REFERENCES `project_uob`.`course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `student_id_fk`
    FOREIGN KEY (`student_id`)
    REFERENCES `project_uob`.`student` (`student_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `project_uob`.`teacher_rating` (
  `id` BIGINT NOT NULL,
  `student_id` BIGINT NOT NULL,
  `teacher_id` BIGINT NOT NULL,
  `rating` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `teacher_id_idx` (`teacher_id` ASC) VISIBLE,
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `teacher_id_fk2`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `project_uob`.`teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `student_id_fk2`
    FOREIGN KEY (`student_id`)
    REFERENCES `project_uob`.`student` (`student_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

