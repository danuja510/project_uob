package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface StudentRepository extends JpaRepository<Student, Long> {

    Page<Student> findByStudentEmailEquals(@RequestParam("email") String email, Pageable pageable);
}
