package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "time_slots")
public class TimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "start_time")
    private Date startTime;

    @Column(name = "end_time")
    private Date endTime;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "zoom_link")
    private String zoomLink;

    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String description;

    @Column(name = "zoom_meeting_id")
    private Long zoomMeetingId;

    @Column(name = "automated_schedule")
    private boolean automatedSchedule;
}
