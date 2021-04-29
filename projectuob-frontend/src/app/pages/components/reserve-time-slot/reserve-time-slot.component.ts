import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/backend/courses.service';
import {TimeSlotService} from '../../../services/backend/time-slot.service';
import {LoginService} from '../../../services/common/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../masters/course/course.model';
import {TimeSlot} from '../../teaching/teacher-time-slots/time-slot.model';
import {CourseTeacherService} from '../../../services/backend/course-teacher.service';
import {CourseTeacher} from '../../masters/course/course-teacher.model';

@Component({
  selector: 'app-reserve-time-slot',
  templateUrl: './reserve-time-slot.component.html',
  styleUrls: ['./reserve-time-slot.component.css']
})
export class ReserveTimeSlotComponent implements OnInit {

  courseTeacher: CourseTeacher;
  timeSlots: TimeSlot[];

  constructor(private courseService: CoursesService,
              private timeSlotService: TimeSlotService,
              private login: LoginService,
              private route: ActivatedRoute,
              private courseTeacherService: CourseTeacherService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.courseTeacherService.getCourseTeacher(+ params.id).subscribe(
          response => {
            this.courseTeacher = response;
            this.timeSlotService.getNotReservedTimeSlotsByTeacher(this.courseTeacher.teacherId).subscribe(
              response2 => {
                this.timeSlots = response2;
              }
            );
          }
        );
      }
    );
  }

  timeSlotDetails(id: number): void {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
