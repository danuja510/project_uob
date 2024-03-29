package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.TeacherDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource(path="teacherDetails", collectionResourceRel = "teacherDetails", itemResourceRel = "teacherDetails")
public interface TeacherDetailsRepository extends JpaRepository<TeacherDetails, Long> {
}
