import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {TimeSlot} from '../time-slot.model';
import {CourseEnrollmentService} from '../../../../services/backend/course-enrollment.service';
import {LoginService} from '../../../../services/common/login.service';
import {SchedulerService} from '../../../../services/backend/scheduler.service';
import {Scheduler} from '../../../../shared/scheduler.model';

@Component({
  selector: 'app-time-slot-details',
  templateUrl: './time-slot-details.component.html',
  styleUrls: ['./time-slot-details.component.css']
})
export class TimeSlotDetailsComponent implements OnInit {

  timeSlot: TimeSlot;
  timeSlotDate: Date;
  timeSlotStartTime: Date;
  timeSlotEndTime: Date;

  constructor(
    private route: ActivatedRoute,
    private timeSlotService: TimeSlotService,
    private router: Router,
    private courseEnrollmentService: CourseEnrollmentService,
    private login: LoginService,
    private schedulerService: SchedulerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.timeSlotService.getTimeSlot( +params.id ).subscribe(
          response => {
            this.timeSlot = response;
            this.timeSlotDate = new Date (this.timeSlot.date);
            this.timeSlotStartTime = new Date(this.timeSlot.startTime);
            this.timeSlotEndTime = new Date(this.timeSlot.endTime);
          }
        );
      }
    );
  }

  removeTimeSlot(): void {
    if (this.timeSlot.studentId){
      this.courseEnrollmentService.getCourseEnrollmentsByStudent(this.timeSlot.studentId).subscribe(
        response => {
          const enrolledCourses = response;
          for (const tempEnrollment of enrolledCourses){
            if (tempEnrollment.courseId === this.timeSlot.courseId){
              tempEnrollment.noOfSessions++;
              this.courseEnrollmentService.updateCourseEnrollment(tempEnrollment, tempEnrollment.no).subscribe();
              break;
            }
          }
          const schedule = new Scheduler();
          schedule.meetingId = this.timeSlot.zoomMeetingId;
          this.schedulerService.deleteSession(this.login.getTeacher().teacherId, schedule).subscribe();
          this.timeSlotService.deleteTimeSlot(this.timeSlot.id).subscribe();
        }
      );
    }else{
      this.timeSlotService.deleteTimeSlot(this.timeSlot.id).subscribe();
    }
    this.router.navigate(['/teaching/time-slots']);
  }
}
