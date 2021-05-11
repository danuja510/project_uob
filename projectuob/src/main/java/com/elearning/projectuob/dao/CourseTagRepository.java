package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.CourseTag;
import com.elearning.projectuob.entity.TeacherTag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface CourseTagRepository extends JpaRepository<CourseTag, Long> {
    @Query(value = "select * from course_tag c group by c.tag", nativeQuery = true)
    Page<CourseTag> getDistinctTags(Pageable pageable);
}
