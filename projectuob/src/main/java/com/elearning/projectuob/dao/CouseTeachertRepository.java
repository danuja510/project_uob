package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseTeacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CouseTeachertRepository extends JpaRepository<CourseTeacher, Long> {
}
