package com.elearning.projectuob.dao;

import com.elearning.projectuob.dto.AggregatedRatings;
import com.elearning.projectuob.entity.CourseRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface CourseRatingRepository extends JpaRepository<CourseRating,Long> {

    @Query("SELECT new com.elearning.projectuob.dto.AggregatedRatings( AVG(cr.rating), cr.courseId) "
    + "FROM CourseRating AS cr WHERE cr.courseId=:id GROUP BY cr.courseId")
    AggregatedRatings getCourseAverageRating(@RequestParam("id") Long id);
}
