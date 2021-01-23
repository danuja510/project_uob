package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository  extends JpaRepository<Teacher, Long> {
}
