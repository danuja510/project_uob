package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface CourseRepository extends JpaRepository<Course, Long> {

    @Query(value = "select * from course c, course_subject cs where c.course_id = cs.course_id and subject_id = ?1", nativeQuery = true)
//    @Procedure("filterCoursesBySubject")
    Page<Course> findBySubjectId(@RequestParam("id") Long id, Pageable pageable);

    Page<Course> findByCourseNameContaining(@RequestParam("name") String name, Pageable pageable);

    Page<Course> findByCourseId(@RequestParam("id") int itemIds, Pageable pageable);

    @Query(value = "select * from course c, course_teacher ct where c.course_id = ct.course_id and teacher_id = ?1", nativeQuery = true)
    Page<Course> findByTeacherId(@RequestParam("id") Long id, Pageable pageable);

    @Query(value = "select * from course c, course_enrollment ce where c.course_id = ce.course_id and student_id = ?1", nativeQuery = true)
    Page<Course> findByEnrolledStudent(@RequestParam("id") Long id, Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT * FROM course cr, order_item o where cr.course_id=o.course_id group by cr.course_id order by sum(quantity) desc")
    Page<Course> getCourseByPurchases(Pageable pageable);

    @Query(value = "SELECT * FROM course c order by c.date_created desc", nativeQuery = true)
    Page<Course> getCourseByDateCreatedDesc(Pageable pageable);
}
