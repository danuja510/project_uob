package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "course_tag")
public class CourseTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "tag")
    private String tag;
}
