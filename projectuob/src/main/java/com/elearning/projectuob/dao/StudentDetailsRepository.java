package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="student-details", collectionResourceRel = "studentDetails", itemResourceRel = "studentDetails")
public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Long> {
}
