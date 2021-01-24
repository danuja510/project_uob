package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
