package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseEnrollment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment,Long> {
    Page<CourseEnrollment> findByStudentIdEquals(@RequestParam("id") Long id, Pageable pageable);
}
