package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Student;
import com.elearning.projectuob.entity.Subject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    Page<Subject> findBySubjectNameEquals(@RequestParam("name") String name, Pageable pageable);
}
