package com.elearning.projectuob.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "teacher")
@Data
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "slug")
    private String slug;

    @Column(name = "teacher_first_name")
    private String teacherFirstName;

    @Column(name = "teacher_last_name")
    private String teacherLastName;

    @Column(name = "teacher_email")
    private String teacherEmail;

    @Column(name = "password")
    private String password;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date_joined")
    @CreationTimestamp
    private Date dateJoined;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "teacherId")
    private TeacherDetails teacherDetails;
}
