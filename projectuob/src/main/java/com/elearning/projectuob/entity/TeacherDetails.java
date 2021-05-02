package com.elearning.projectuob.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "teacher_details")
@Getter
@Setter
public class TeacherDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Long no;

    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "teacher_telephone")
    private Long teacherTelephone;

    @Column(name = "teacher_address")
    private String teacherAddress;

}
