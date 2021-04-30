package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "teacher_rating")
public class TeacherRating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column( name = "student_id")
    private Long studentId;

    @Column( name = "teacher_id")
    private Long teacherId;

    @Column( name = "rating")
    private float rating;
}
