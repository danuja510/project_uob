package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
//@NamedStoredProcedureQueries({
//    @NamedStoredProcedureQuery(
//        name = "getCourses",
//        procedureName = "getCourses",
//        resultClasses = {Course.class}
//    ),
//    @NamedStoredProcedureQuery(
//        name = "filterCoursesBySubject",
//        procedureName = "filterCoursesBySubject",
//        parameters = {
//            @StoredProcedureParameter(mode = ParameterMode.IN, name = "id", type = Long.class)
//        },
//        resultClasses = {Course.class}
//)
//})
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
    private boolean isActive;

    @Column(name = "per_session_price")
    private Float perSessionPrice;

    @Column(name = "image_url")
    private String imageUrl;

    @CreationTimestamp
    @Column(name = "date_created")
    private Date dateCreated;

    @UpdateTimestamp
    @Column(name = "last_modified")
    private Date lastModified;

    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinTable(
            name = "course_subject",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private List<Subject> subjects;

    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinTable(
            name = "course_teacher",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "teacher_id"))
    private List<Teacher> teachers;

    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinTable(
            name = "course_enrollment",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id"))
    private List<Student> students;
}
