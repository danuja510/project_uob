package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface CourseRepository extends JpaRepository<Course, Long> {

    @Query(value = "select * from course c, course_subject cs where c.course_id = cs.course_id and subject_id = ?1", nativeQuery = true)
    Page<Course> findBySubjectId(@RequestParam("id") Long id, Pageable pageable);
}
