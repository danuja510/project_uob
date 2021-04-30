package com.elearning.projectuob.dao;

import com.elearning.projectuob.dto.AggregatedRatings;
import com.elearning.projectuob.entity.TeacherRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

public interface TeacherRatingRepository extends JpaRepository<TeacherRating, Long> {

    @Query("SELECT new com.elearning.projectuob.dto.AggregatedRatings( AVG(tr.rating), tr.teacherId) "
            + "FROM TeacherRating AS tr WHERE tr.teacherId=:id GROUP BY tr.teacherId")
    AggregatedRatings getTeacherAverageRating(@RequestParam("id") Long id);
}
