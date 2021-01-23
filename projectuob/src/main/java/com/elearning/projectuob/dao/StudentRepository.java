package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
