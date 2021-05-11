package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.TeacherTag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface TeacherTagRepository extends JpaRepository<TeacherTag, Long> {

    @Query(value = "select * from teacher_tag t group by t.tag", nativeQuery = true)
    Page<TeacherTag> getDistinctTags(Pageable pageable);
}
