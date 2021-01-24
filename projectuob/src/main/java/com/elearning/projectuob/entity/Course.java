package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "sku")
    private String sku;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_description")
    private String courseDescription;

    @Column(name = "is_active")
    private String isActive;

    @Column(name = "per_session_price")
    private Float perSessionPrice;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date_created")
    private Date dateCreated;

    @Column(name = "last_modified")
    private Date lastModified;
}
