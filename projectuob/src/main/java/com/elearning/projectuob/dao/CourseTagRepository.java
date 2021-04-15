package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CourseTagRepository extends JpaRepository<CourseTag, Long> {
}
