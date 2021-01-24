package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "subject")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subject_id")
    private Long subjectId;

    @Column(name = "sku")
    private String sku;

    @Column(name = "subject_name")
    private String subjectName;

    @Column(name = "subject_description")
    private String subjectDescription;

    @Column(name = "is_active")
    private boolean isActive;
}
