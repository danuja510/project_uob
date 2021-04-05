package com.elearning.projectuob.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "student")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_number")
    private Long studentNumber;

    @Column(name = "slug")
    private String slug;

    @Column(name = "student_first_name")
    private String studentFirstName;

    @Column(name = "student_last_name")
    private String studentLastName;

    @Column(name = "student_email")
    private String studentEmail;

    @Column(name = "password")
    private String password;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date_joined")
    @CreationTimestamp
    private Date dateJoined;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "studentNumber", fetch = FetchType.LAZY)
    private StudentDetails studentDetails;

//    @ManyToMany(fetch = FetchType.LAZY, cascade= {CascadeType.DETACH,
//            CascadeType.MERGE,
//            CascadeType.PERSIST,
//            CascadeType.REFRESH})
//    @JoinTable(
//            name = "course_enrollment",
//            joinColumns = @JoinColumn(name = "student_id"),
//            inverseJoinColumns = @JoinColumn(name = "course_id"))
//    private List<Course> courses;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private Set<Order> orders = new HashSet<>();

    public void add(Order order) {
        if (order!= null){
            if(orders==null){
                orders = new HashSet<>();
            }
            orders.add(order);
            order.setStudent(this);
        }
    }
}
