package com.elearning.projectuob.entity;

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

    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name ="title")
    private String title;

    @Column(name ="institution")
    private String institution;

    @Column(name ="description")
    private String description;

    @Column(name ="working_from")
    private Date from;

    @Column(name ="worked_until")
    private Date to;

    @Column(name ="currently_working")
    private boolean currentlyWorking;
}
