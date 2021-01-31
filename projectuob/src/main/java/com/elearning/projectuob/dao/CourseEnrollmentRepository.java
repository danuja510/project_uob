package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseEnrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment,Long> {
}
