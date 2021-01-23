package com.elearning.projectuob.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "student_details")
@Getter
@Setter
public class StudentDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Long no;

    @OneToOne
    @JoinColumn(name = "student_number", nullable = false)
    private Student studentNumber;

    @Column(name = "student_telephone")
    private Long studentTelephone;

    @Column(name = "student_address")
    private String studentAddress;

    @Column(name = "student_education_level")
    private String studentEducationLevel;

    @Column(name = "student_dob")
    private Date studentDob;
}
