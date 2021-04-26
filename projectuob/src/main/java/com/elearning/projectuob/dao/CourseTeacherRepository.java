package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import com.elearning.projectuob.entity.CourseTeacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface CourseTeacherRepository extends JpaRepository<CourseTeacher, Long> {

    Page<CourseTeacher> findByTeacherIdEquals(@RequestParam("id") Long id, Pageable pageable);

    Page<CourseTeacher> findByCourseIdEquals(@RequestParam("id") Long id, Pageable pageable);
}
