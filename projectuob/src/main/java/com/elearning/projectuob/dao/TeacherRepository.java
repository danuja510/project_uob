package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import com.elearning.projectuob.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface TeacherRepository  extends JpaRepository<Teacher, Long> {

    @Query(value = "select * from teacher t, teacher_subject ts where t.teacher_id = ts.teacher_id and subject_id = ?1", nativeQuery = true)
    Page<Teacher> findBySubjectId(@RequestParam("id") Long id, Pageable pageable);
}
