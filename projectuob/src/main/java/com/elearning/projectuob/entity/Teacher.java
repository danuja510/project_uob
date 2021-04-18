package com.elearning.projectuob.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "date_joined")
    @CreationTimestamp
    private Date dateJoined;

    @Column(name = "image_url")
    private String imageUrl;

//    @OneToOne(cascade = CascadeType.ALL, mappedBy = "teacherId", fetch = FetchType.LAZY)
//    private TeacherDetails teacherDetails;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacherId",fetch = FetchType.LAZY)
//    private List<TeacherExperience> teacherExperiences;
//
//    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
//                                                    CascadeType.MERGE,
//                                                    CascadeType.PERSIST,
//                                                    CascadeType.REFRESH})
//    @JoinTable(
//            name = "teacher_subject",
//            joinColumns = @JoinColumn(name = "teacher_id"),
//            inverseJoinColumns = @JoinColumn(name = "subject_id"))
//    private List<Subject> subjects;
//
//    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
//            CascadeType.MERGE,
//            CascadeType.PERSIST,
//            CascadeType.REFRESH})
//    @JoinTable(
//            name = "course_teacher",
//            joinColumns = @JoinColumn(name = "teacher_id"),
//            inverseJoinColumns = @JoinColumn(name = "course_id"))
//    private List<Course> courses;
}
