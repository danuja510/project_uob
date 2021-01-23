package com.elearning.projectuob.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "student")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_number")
    private Long studentNumber;

    @Column(name = "slug")
    private String slug;

    @Column(name = "student_first_name")
    private String studentFirstName;

    @Column(name = "student_last_name")
    private String studentLastName;

    @Column(name = "student_email")
    private String studentEmail;

    @Column(name = "password")
    private String password;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date_joined")
    @CreationTimestamp
    private Date dateJoined;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "studentNumber")
    private StudentDetails studentDetails;
}
