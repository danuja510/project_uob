-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 11, 2021 at 05:18 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
