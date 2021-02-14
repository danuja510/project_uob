USE `project_uob`;
DROP procedure IF EXISTS `filterCoursesBySubject`;

DELIMITER $$
USE `project_uob`$$
CREATE PROCEDURE `filterCoursesBySubject` (in id int)
BEGIN
	select 
		c.course_id,
		sku,
		course_name,
		course_description,
		is_active,
		per_session_price,
		image_url,
		date_created,
		last_modified
    from course c 
    join course_subject cs 
    on c.course_id = cs.course_id 
    where subject_id = id;
END$$

DELIMITER ;

USE `project_uob`;
DROP procedure IF EXISTS `getCourses`;

DELIMITER $$
USE `project_uob`$$
CREATE PROCEDURE `getCourses` ()
BEGIN
	select *
    from course c;
END$$

DELIMITER ;