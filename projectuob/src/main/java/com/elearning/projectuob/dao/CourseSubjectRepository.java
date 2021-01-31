package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CourseSubjectRepository extends JpaRepository<CourseSubject, Long> {
}
