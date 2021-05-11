package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import com.elearning.projectuob.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface TeacherRepository  extends JpaRepository<Teacher, Long> {

    @Query(value = "select * from teacher t, teacher_subject ts where t.teacher_id = ts.teacher_id and subject_id = ?1", nativeQuery = true)
    Page<Teacher> findBySubjectId(@RequestParam("id") Long id, Pageable pageable);

    Page<Teacher> findByTeacherEmailEquals(@RequestParam("email") String email, Pageable pageable);

    @Query(value = "select * from  course_enrollment ce, course_teacher ct, teacher t " +
            "where ce.course_id = ct.course_id and t.teacher_id = ct.teacher_id and student_id =?1 group by t.teacher_id", nativeQuery = true)
    Page<Teacher> findByEnrolledStudent(@RequestParam("id") Long id, Pageable pageable);

    @Query(value = "SELECT *, sum(quantity) FROM project_uob.teacher t, project_uob.course_teacher ct, project_uob.order_item o " +
            "where t.teacher_id = ct.teacher_id and ct.course_id = o.course_id " +
            "group by t.teacher_id order by sum(quantity) desc", nativeQuery = true)
    Page<Teacher> getTeachersByPurchases( Pageable pageable);
}
