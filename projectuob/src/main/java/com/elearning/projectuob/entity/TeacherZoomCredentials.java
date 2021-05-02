package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "teacher_zoom_credentials")
public class TeacherZoomCredentials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "zoom_user_id")
    private String zoomUserId;

    @Column(name = "zoom_password")
    private String zoomPassword;

    @Column(name = "zoom_api_secret")
    private String zoomApiSecret;

    @Column(name = "zoom_api_key")
    private String zoomApiKey;
}
