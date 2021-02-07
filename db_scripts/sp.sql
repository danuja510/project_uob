USE `project_uob`;
DROP procedure IF EXISTS `filterCoursesBySubject`;

DELIMITER $$
USE `project_uob`$$
CREATE PROCEDURE `filterCoursesBySubject` (in id int)
BEGIN
	select * from course c, course_subject cs where c.course_id = cs.course_id and subject_id = id;
END$$

DELIMITER ;