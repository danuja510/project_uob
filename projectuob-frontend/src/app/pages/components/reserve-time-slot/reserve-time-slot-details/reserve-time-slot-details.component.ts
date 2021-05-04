import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {LoginService} from '../../../../services/common/login.service';
import {TimeSlot} from '../../../teaching/teacher-time-slots/time-slot.model';
import {CourseEnrollmentService} from '../../../../services/backend/course-enrollment.service';
import {Course} from '../../../masters/course/course.model';
import {CoursesService} from '../../../../services/backend/courses.service';
import {SchedulerService} from '../../../../services/backend/scheduler.service';
import {Scheduler} from '../../../../shared/scheduler.model';

@Component({
  selector: 'app-reserve-time-slot-details',
  templateUrl: './reserve-time-slot-details.component.html',
  styleUrls: ['./reserve-time-slot-details.component.css']
})
export class ReserveTimeSlotDetailsComponent implements OnInit {

  timeSlot: TimeSlot;
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private timeSlotService: TimeSlotService,
    private login: LoginService,
    private courseEnrollmentService: CourseEnrollmentService,
    private courseSerivce: CoursesService,
    private schedulerService: SchedulerService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.timeSlotService.getTimeSlot(+params.timeSlot).subscribe(
          response => {
            this.timeSlot = response;
          }
        );
        this.courseSerivce.getCourse(+params.id).subscribe(
          response => {
            this.course = response;
          }
        );
      }
    );
  }

  reserveTimeSlot(): void {
    this.timeSlot.studentId = this.login.getStudent().studentNumber;
    this.timeSlot.courseId = this.course.courseId;
    this.timeSlot.description =  '"' + this.course.courseName + '" Session';
    if (this.timeSlot.automatedSchedule){
      let scheduler = new Scheduler();
      scheduler.topic = '"' + this.course.courseName + '" Session';
      scheduler.startTime = this.timeSlot.startTime.toLocaleString().split('.')[0];
      scheduler.timeZone = 'UTC';
      this.schedulerService.createSession(this.timeSlot.teacherId, scheduler).subscribe(
        response => {
          scheduler = response;
          this.timeSlot.zoomLink = scheduler.meetingUrl;
          this.timeSlot.zoomMeetingId = scheduler.meetingId;
          this.timeSlotService.updateTimeSlot(this.timeSlot, this.timeSlot.id).subscribe();
        }
      );
    }else {
      this.timeSlotService.updateTimeSlot(this.timeSlot, this.timeSlot.id).subscribe();
    }
    this.courseEnrollmentService.getCourseEnrollmentsByStudent(this.login.getStudent().studentNumber).subscribe(
      response => {
        const enrolledCourses = response;
        for (const tempEnrollment of enrolledCourses){
          if (tempEnrollment.courseId === this.course.courseId){
            tempEnrollment.noOfSessions--;
            this.courseEnrollmentService.updateCourseEnrollment(tempEnrollment, tempEnrollment.no).subscribe();
            break;
          }
        }
      }
    );
    this.router.navigate(['/account/time-slots']);
  }
}
