package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface TeacherRepository  extends JpaRepository<Teacher, Long> {
}
