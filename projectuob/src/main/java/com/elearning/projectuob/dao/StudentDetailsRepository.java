package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(path="studentDetails", collectionResourceRel = "studentDetails", itemResourceRel = "studentDetails")
public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Long> {
}
