package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
