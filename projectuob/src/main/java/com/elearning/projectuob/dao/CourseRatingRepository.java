package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CourseRatingRepository extends JpaRepository<CourseRating,Long> {
}
