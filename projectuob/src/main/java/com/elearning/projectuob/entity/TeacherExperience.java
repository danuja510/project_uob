package com.elearning.projectuob.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "teacher_experience")
public class TeacherExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="no")
    private Long no;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private Teacher teacherId;

    @Column(name ="title")
    private String title;

    @Column(name ="description")
    private String description;

    @Column(name ="from")
    private Date from;

    @Column(name ="to")
    private Date to;

    @Column(name ="currently_working")
    private boolean currentlyWorking;
}
