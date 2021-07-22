-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 11, 2021 at 09:45 AM
-- Server version: 8.0.23
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_uob`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `zip_code` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `course_id` bigint NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_description` varchar(200) DEFAULT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'1',
  `per_session_price` float NOT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `date_created` date NOT NULL,
  `last_modified` date NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `sku`, `course_name`, `course_description`, `is_active`, `per_session_price`, `image_url`, `date_created`, `last_modified`) VALUES
(40, 'information technology - grade 6-702', 'Information Technology - Grade 6', 'Local Syllabus', b'0', 4.99, 'assets/images/products/it6.PNG', '2021-05-11', '2021-05-11'),
(41, 'information technology - grade 7-413', 'Information Technology - Grade 7', 'Local Syllabus', b'0', 4.99, 'assets/images/products/it7.PNG', '2021-05-11', '2021-05-11'),
(42, 'information technology -  grade 8-682', 'Information Technology -  Grade 8', 'Local Syllabus', b'0', 4.99, 'assets/images/products/it8.PNG', '2021-05-11', '2021-05-11'),
(43, 'information technology - grade 9-42', 'Information Technology - Grade 9', 'Local Syllabus', b'0', 4.99, 'assets/images/products/it9.PNG', '2021-05-11', '2021-05-11'),
(44, 'information technology - grade 10-251', 'Information Technology - Grade 10', 'Local Syllabus', b'0', 9.99, 'assets/images/products/it10.PNG', '2021-05-11', '2021-05-11'),
(45, 'information technology - grade 11-707', 'Information Technology - Grade 11', 'Local Syllabus', b'0', 9.99, 'assets/images/products/it11.PNG', '2021-05-11', '2021-05-11'),
(46, 'science - grade 6-179', 'Science - Grade 6', 'Local Syllabus', b'0', 5.99, 'assets/images/products/scienceg6.PNG', '2021-05-11', '2021-05-11'),
(47, 'science - grade 7-200', 'Science - Grade 7', 'Local Syllabus', b'0', 5.99, 'assets/images/products/sci7.PNG', '2021-05-11', '2021-05-11'),
(48, 'science - grade 8-908', 'Science - Grade 8', 'Local Syllabus', b'0', 5.99, 'assets/images/products/sci8.PNG', '2021-05-11', '2021-05-11'),
(49, 'science - grade 9-482', 'Science - Grade 9', 'Local Syllabus', b'0', 5.99, 'assets/images/products/sci9.PNG', '2021-05-11', '2021-05-11'),
(50, 'science - grade 10-440', 'Science - Grade 10', 'Local Syllabus', b'0', 10.99, 'assets/images/products/sci10.PNG', '2021-05-11', '2021-05-11'),
(51, 'science - grade 11-830', 'Science - Grade 11', 'Local Syllabus', b'0', 10.99, 'assets/images/products/sci11.PNG', '2021-05-11', '2021-05-11'),
(52, 'health - grade 6-338', 'Health - Grade 6', 'Local Syllabus', b'0', 3.99, 'assets/images/products/health6.PNG', '2021-05-11', '2021-05-11'),
(53, 'health - grade 7-324', 'Health - Grade 7', 'Local Syllabus', b'0', 3.99, 'assets/images/products/health7.PNG', '2021-05-11', '2021-05-11'),
(54, 'health - grade 8-291', 'Health - Grade 8', 'Local Syllabus', b'0', 3.99, 'assets/images/products/health8.PNG', '2021-05-11', '2021-05-11'),
(55, 'health - grade 9-682', 'Health - Grade 9', 'Local Syllabus', b'0', 3.99, 'assets/images/products/health9.PNG', '2021-05-11', '2021-05-11'),
(56, 'health - grade 10-615', 'Health - Grade 10', 'Local Syllabus', b'0', 8.99, 'assets/images/products/health10.PNG', '2021-05-11', '2021-05-11'),
(57, 'health - grade 11-377', 'Health - Grade 11', 'Local Syllabus', b'0', 8.99, 'assets/images/products/health11.PNG', '2021-05-11', '2021-05-11');

-- --------------------------------------------------------

--
-- Table structure for table `course_enrollment`
--

DROP TABLE IF EXISTS `course_enrollment`;
CREATE TABLE IF NOT EXISTS `course_enrollment` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `course_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  `enrollment_date` date NOT NULL,
  `no_of_sessions` int NOT NULL,
  PRIMARY KEY (`no`),
  KEY `course_enrollent_fk1_idx` (`course_id`),
  KEY `course_enrollent_fk2_idx` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course_rating`
--

DROP TABLE IF EXISTS `course_rating`;
CREATE TABLE IF NOT EXISTS `course_rating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint NOT NULL,
  `course_id` bigint NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id_idx` (`course_id`),
  KEY `student_id_idx` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course_subject`
--

DROP TABLE IF EXISTS `course_subject`;
CREATE TABLE IF NOT EXISTS `course_subject` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `course_id` bigint DEFAULT NULL,
  `subject_id` bigint DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `course_subject_fk1_idx` (`course_id`),
  KEY `course_subject_fk2_idx` (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `course_subject`
--

INSERT INTO `course_subject` (`no`, `course_id`, `subject_id`) VALUES
(1, 40, 14),
(2, 41, 14),
(3, 42, 14),
(4, 43, 14),
(5, 44, 14),
(6, 45, 14),
(7, 46, 15),
(8, 47, 15),
(9, 48, 15),
(10, 49, 15),
(11, 50, 15),
(12, 51, 15),
(13, 52, 16),
(14, 53, 16),
(15, 54, 16),
(16, 55, 16),
(17, 56, 16),
(18, 57, 16);

-- --------------------------------------------------------

--
-- Table structure for table `course_tag`
--

DROP TABLE IF EXISTS `course_tag`;
CREATE TABLE IF NOT EXISTS `course_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `course_id` bigint DEFAULT NULL,
  `tag` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id_idx` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `course_tag`
--

INSERT INTO `course_tag` (`id`, `course_id`, `tag`) VALUES
(1, 40, 'o/l'),
(2, 40, 'it'),
(3, 40, 'information technology'),
(4, 40, 'grade 6'),
(5, 41, 'it'),
(6, 41, 'o/l'),
(7, 41, 'information technology'),
(8, 41, 'grade 7'),
(9, 42, 'grade 8'),
(10, 42, 'it'),
(11, 42, 'o/l'),
(12, 42, 'information technology'),
(13, 43, 'information technology'),
(14, 43, 'it'),
(15, 43, 'o/l'),
(16, 44, 'grade 10'),
(17, 44, 'it'),
(18, 44, 'information technology'),
(19, 44, 'o/l'),
(20, 45, 'information technology'),
(21, 45, 'it'),
(22, 45, 'o/l'),
(23, 45, 'grade 11'),
(24, 46, 'sci'),
(25, 46, 'o/l'),
(26, 46, 'grade 6'),
(27, 46, 'science'),
(28, 47, 'sci'),
(29, 47, 'o/l'),
(30, 47, 'science'),
(31, 47, 'grade 7'),
(32, 48, 'o/l'),
(33, 48, 'sci'),
(34, 48, 'science'),
(35, 48, 'grade 8'),
(36, 49, 'sci'),
(37, 49, 'science'),
(38, 49, 'o/l'),
(39, 49, 'grade 9'),
(40, 43, 'grade 9'),
(41, 50, 'sci'),
(42, 50, 'science'),
(43, 50, 'grade 10'),
(44, 50, 'o/l'),
(45, 51, 'sci'),
(46, 51, 'science'),
(47, 51, 'o/l'),
(48, 51, 'grade 11'),
(49, 52, 'grade 6'),
(50, 52, 'health'),
(51, 52, 'o/l'),
(52, 53, 'health'),
(53, 53, 'grade 7'),
(54, 53, 'o/l'),
(55, 54, 'o/l'),
(56, 54, 'health'),
(57, 54, 'grade 8'),
(58, 55, 'health'),
(59, 55, 'grade 9'),
(60, 55, 'o/l'),
(61, 56, 'health'),
(62, 56, 'grade 10'),
(63, 56, 'o/l'),
(64, 57, 'o/l'),
(65, 57, 'health'),
(66, 57, 'grade 11');

-- --------------------------------------------------------

--
-- Table structure for table `course_teacher`
--

DROP TABLE IF EXISTS `course_teacher`;
CREATE TABLE IF NOT EXISTS `course_teacher` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `course_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  PRIMARY KEY (`no`),
  KEY `course_teacher_idx` (`teacher_id`),
  KEY `course_teacher_fk2_idx` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `course_teacher`
--

INSERT INTO `course_teacher` (`no`, `course_id`, `teacher_id`) VALUES
(1, 40, 22),
(2, 41, 22),
(3, 42, 22),
(4, 43, 22),
(5, 44, 22),
(6, 45, 22),
(7, 46, 25),
(8, 47, 25),
(9, 48, 25),
(10, 49, 25),
(11, 50, 25),
(12, 51, 25),
(13, 52, 24),
(14, 53, 24),
(15, 54, 24),
(16, 55, 24),
(17, 56, 23),
(18, 57, 23);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_tracking_number` varchar(150) DEFAULT NULL,
  `total_quantity` int DEFAULT NULL,
  `total_price` float DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `last_updated` date DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `billing_address_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `std_fk_idx` (`student_id`),
  KEY `add_fk_idx` (`billing_address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE IF NOT EXISTS `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(150) DEFAULT NULL,
  `price_per_session` float DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `course_id` bigint DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_fk2_idx` (`course_id`),
  KEY `order_fk_idx` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `student_number` bigint NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) DEFAULT NULL,
  `student_first_name` varchar(45) NOT NULL,
  `student_last_name` varchar(45) DEFAULT NULL,
  `student_email` varchar(45) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'1',
  `image_url` varchar(200) DEFAULT NULL,
  `date_joined` date NOT NULL,
  PRIMARY KEY (`student_number`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_number`, `slug`, `student_first_name`, `student_last_name`, `student_email`, `password`, `is_active`, `image_url`, `date_joined`) VALUES
(8, 'ss', 'Danuja', 'Kalugamaarachchi', 'danuja.nimsara@outlook.com', NULL, b'1', 'assets/images/teachers/pic2.jpg', '2021-05-11'),
(9, 'ss', 'Danuja', 'Kalugamaarachchi', 'danuja.kalugamaarachchi@outlook.com', NULL, b'1', NULL, '2021-05-11'),
(10, 'ss', 'Jason', 'Bourne', 'Jason.bourne@random.com', NULL, b'1', NULL, '2021-05-11'),
(11, 'ss', 'Walter', 'White', 'walter.white@random.com', NULL, b'1', NULL, '2021-05-11');

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
CREATE TABLE IF NOT EXISTS `student_details` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `student_number` bigint NOT NULL,
  `student_telephone` int DEFAULT NULL,
  `student_address` varchar(100) DEFAULT NULL,
  `student_education_level` varchar(50) DEFAULT NULL,
  `student_dob` date DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `student_number` (`student_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
CREATE TABLE IF NOT EXISTS `subject` (
  `subject_id` bigint NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `subject_name` varchar(50) DEFAULT NULL,
  `subject_description` varchar(45) DEFAULT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subject_id`, `sku`, `subject_name`, `subject_description`, `is_active`) VALUES
(14, NULL, 'information technology', NULL, b'1'),
(15, NULL, 'science', NULL, b'1'),
(16, NULL, 'health', NULL, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `teacher_id` bigint NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) DEFAULT NULL,
  `teacher_first_name` varchar(45) NOT NULL,
  `teacher_last_name` varchar(45) DEFAULT NULL,
  `teacher_email` varchar(45) NOT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'1',
  `date_joined` date NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `slug`, `teacher_first_name`, `teacher_last_name`, `teacher_email`, `is_active`, `date_joined`, `image_url`) VALUES
(22, 'danuja-201', 'Danuja', 'Kalugamaarachchi', 'danuja.nimsara@outlook.com', b'1', '2021-05-11', 'assets/images/teachers/pic2.jpg'),
(23, 'danuja-777', 'Danuja', 'Kalugamaarachchi', 'danuja.kalugamaarachchi@outlook.com', b'1', '2021-05-11', NULL),
(24, 'jason-419', 'Jason', 'Bourne', 'Jason.bourne@random.com', b'1', '2021-05-11', NULL),
(25, 'walter-558', 'Walter', 'White', 'walter.white@random.com', b'1', '2021-05-11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `teacher_details`
--

DROP TABLE IF EXISTS `teacher_details`;
CREATE TABLE IF NOT EXISTS `teacher_details` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `teacher_telephone` int DEFAULT NULL,
  `teacher_address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `teacher_id` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher_details`
--

INSERT INTO `teacher_details` (`no`, `teacher_id`, `teacher_telephone`, `teacher_address`) VALUES
(1, 22, 727355582, 'Colombo'),
(2, 23, 727355582, 'Colombo'),
(3, 24, 23545634, 'LA'),
(4, 25, 23545634, 'ABQ');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_experience`
--

DROP TABLE IF EXISTS `teacher_experience`;
CREATE TABLE IF NOT EXISTS `teacher_experience` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `working_from` date NOT NULL,
  `worked_until` date DEFAULT NULL,
  `currently_working` bit(1) NOT NULL DEFAULT b'1',
  `institution` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `teacher_experience_id` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher_experience`
--

INSERT INTO `teacher_experience` (`no`, `teacher_id`, `title`, `description`, `working_from`, `worked_until`, `currently_working`, `institution`) VALUES
(1, 22, 'Graduate Trainee', NULL, '2020-09-29', NULL, b'1', 'H One'),
(2, 23, 'Teacher', NULL, '2014-01-06', NULL, b'1', 'SSCK'),
(3, 25, 'Chemistry', NULL, '2007-06-11', '2008-06-11', b'0', 'ABQHS');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_rating`
--

DROP TABLE IF EXISTS `teacher_rating`;
CREATE TABLE IF NOT EXISTS `teacher_rating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id_idx` (`teacher_id`),
  KEY `student_id_idx` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_subject`
--

DROP TABLE IF EXISTS `teacher_subject`;
CREATE TABLE IF NOT EXISTS `teacher_subject` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `subject_id` bigint NOT NULL,
  PRIMARY KEY (`no`),
  KEY `teacher_id_idx` (`teacher_id`),
  KEY `subject_id_idx` (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher_subject`
--

INSERT INTO `teacher_subject` (`no`, `teacher_id`, `subject_id`) VALUES
(1, 22, 14),
(2, 23, 15),
(3, 24, 16),
(4, 25, 15);

-- --------------------------------------------------------

--
-- Table structure for table `teacher_tag`
--

DROP TABLE IF EXISTS `teacher_tag`;
CREATE TABLE IF NOT EXISTS `teacher_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint DEFAULT NULL,
  `tag` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id_idx` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher_tag`
--

INSERT INTO `teacher_tag` (`id`, `teacher_id`, `tag`) VALUES
(1, 22, 'it'),
(2, 22, 'information technology'),
(3, 22, 'o/l'),
(4, 23, 'sci'),
(5, 23, 'science'),
(6, 23, 'o/l'),
(7, 24, 'health'),
(8, 24, 'o/l'),
(9, 25, 'science'),
(10, 25, 'sci'),
(11, 25, 'o/l');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_zoom_credentials`
--

DROP TABLE IF EXISTS `teacher_zoom_credentials`;
CREATE TABLE IF NOT EXISTS `teacher_zoom_credentials` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `zoom_user_id` varchar(255) NOT NULL,
  `zoom_password` varchar(255) NOT NULL,
  `zoom_api_secret` varchar(255) NOT NULL,
  `zoom_api_key` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id_fk_6_idx` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teacher_zoom_credentials`
--

INSERT INTO `teacher_zoom_credentials` (`id`, `teacher_id`, `zoom_user_id`, `zoom_password`, `zoom_api_secret`, `zoom_api_key`) VALUES
(1, 22, 'danuja.kalugamaarachchi@study.beds.ac.uk', 'Cricket@96', 'P9f26g3cILIXoc8tfiP47oMDjozfuX3y2ReP', 'tMh-k30TRQKAkJ2L_kG4Uw'),
(2, 23, 'danuja.kalugamaarachchi@study.beds.ac.uk', 'Cricket@96', 'P9f26g3cILIXoc8tfiP47oMDjozfuX3y2ReP', 'tMh-k30TRQKAkJ2L_kG4Uw');

-- --------------------------------------------------------

--
-- Table structure for table `time_slots`
--

DROP TABLE IF EXISTS `time_slots`;
CREATE TABLE IF NOT EXISTS `time_slots` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `zoom_link` varchar(255) DEFAULT NULL,
  `course_id` bigint DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `date` date NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `zoom_meeting_id` bigint DEFAULT NULL,
  `automated_schedule` bit(1) DEFAULT b'0',
  PRIMARY KEY (`id`),
  KEY `teacher_id_idx` (`teacher_id`),
  KEY `student_id_fk_idx` (`student_id`),
  KEY `course_id_fk_idx` (`course_id`),
  KEY `order_id_fk_idx` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course_enrollment`
--
ALTER TABLE `course_enrollment`
  ADD CONSTRAINT `course_enrollent_fk1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `course_enrollent_fk2` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_number`);

--
-- Constraints for table `course_rating`
--
ALTER TABLE `course_rating`
  ADD CONSTRAINT `course_id_fk` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `student_id_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_number`);

--
-- Constraints for table `course_subject`
--
ALTER TABLE `course_subject`
  ADD CONSTRAINT `course_subject_fk1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `course_subject_fk2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`);

--
-- Constraints for table `course_tag`
--
ALTER TABLE `course_tag`
  ADD CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);

--
-- Constraints for table `course_teacher`
--
ALTER TABLE `course_teacher`
  ADD CONSTRAINT `course_teacher_fk1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`),
  ADD CONSTRAINT `course_teacher_fk2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `add_fk` FOREIGN KEY (`billing_address_id`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `std_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_number`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `course_fk2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `order_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `student_details`
--
ALTER TABLE `student_details`
  ADD CONSTRAINT `student_number` FOREIGN KEY (`student_number`) REFERENCES `student` (`student_number`);

--
-- Constraints for table `teacher_details`
--
ALTER TABLE `teacher_details`
  ADD CONSTRAINT `teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `teacher_experience`
--
ALTER TABLE `teacher_experience`
  ADD CONSTRAINT `teacher_experience_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `teacher_rating`
--
ALTER TABLE `teacher_rating`
  ADD CONSTRAINT `student_id_fk2` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_number`),
  ADD CONSTRAINT `teacher_id_fk2` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `teacher_subject`
--
ALTER TABLE `teacher_subject`
  ADD CONSTRAINT `subject_teacher_id` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`),
  ADD CONSTRAINT `teacher_subject_id` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `teacher_tag`
--
ALTER TABLE `teacher_tag`
  ADD CONSTRAINT `teacher_id_fk` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `teacher_zoom_credentials`
--
ALTER TABLE `teacher_zoom_credentials`
  ADD CONSTRAINT `teacher_id_fk_6` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);

--
-- Constraints for table `time_slots`
--
ALTER TABLE `time_slots`
  ADD CONSTRAINT `course_id_fk4` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `student_id_fk4` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_number`),
  ADD CONSTRAINT `teacher_id_fk4` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
