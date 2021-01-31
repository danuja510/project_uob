package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "course_enrollment")
public class CourseEnrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no")
    private Long no;

    @ManyToOne(cascade =  {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "course_id")
    private Course courseId;

    @ManyToOne(cascade =  {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "student_id")
    private Student studentId;

    @Column(name = "enrollment_date")
    @CreationTimestamp
    private Date enrollmentDate;

    @Column(name = "no_of_sessions")
    private int noOfSessions;
}
