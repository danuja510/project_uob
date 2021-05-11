package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.TeacherZoomCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface TeacherZoomCredentialsRepository extends JpaRepository<TeacherZoomCredentials, Long> {

    TeacherZoomCredentials findByTeacherIdEquals(@RequestParam Long id);
}
