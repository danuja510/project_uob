import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../../services/common/login.service';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {TimeSlot} from '../../../teaching/teacher-time-slots/time-slot.model';
import {SchedulerService} from '../../../../services/backend/scheduler.service';
import {CourseEnrollmentService} from '../../../../services/backend/course-enrollment.service';
import {Scheduler} from '../../../../shared/scheduler.model';

@Component({
  selector: 'app-student-time-slot-details',
  templateUrl: './student-time-slot-details.component.html',
  styleUrls: ['./student-time-slot-details.component.css']
})
export class StudentTimeSlotDetailsComponent implements OnInit {

  timeSlot: TimeSlot;

  constructor(
    private route: ActivatedRoute,
    private login: LoginService,
    private timeSlotService: TimeSlotService,
    private schedulerService: SchedulerService,
    private courseEnrollmentService: CourseEnrollmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.timeSlotService.getTimeSlot(+params.timeSlot).subscribe(
          response => {
            this.timeSlot = response;
          }
        );
      }
    );
  }

  removeTimeSlot(): void {
    const tempCourseNo = this.timeSlot.courseId;
    const tempStudentNo = this.timeSlot.studentId;
    this.timeSlot.studentId = undefined;
    this.timeSlot.courseId = undefined;
    this.timeSlot.description = undefined;
    if (this.timeSlot.zoomMeetingId){
      const scheduler = new Scheduler();
      scheduler.meetingId = this.timeSlot.zoomMeetingId;
      this.schedulerService.deleteSession(this.timeSlot.teacherId, scheduler).subscribe();
      this.timeSlot.zoomMeetingId = undefined;
      this.timeSlot.zoomLink = undefined;
    }
    this.timeSlotService.updateTimeSlot(this.timeSlot, this.timeSlot.id).subscribe(
      response2 => {
        this.courseEnrollmentService.getCourseEnrollmentsByStudent(tempStudentNo).subscribe(
          response => {
            const enrolledCourses = response;
            for (const tempEnrollment of enrolledCourses){
              if (tempEnrollment.courseId === tempCourseNo){
                tempEnrollment.noOfSessions++;
                this.courseEnrollmentService.updateCourseEnrollment(tempEnrollment, tempEnrollment.no).subscribe();
                break;
              }
            }
          }
        );
      }
    );
    this.router.navigate(['/account/time-slots']);
  }
}
