import { Component, OnInit } from '@angular/core';
import {TimeSlot} from './time-slot.model';
import {TimeSlotService} from '../../../services/backend/time-slot.service';
import {LoginService} from '../../../services/common/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-time-slots',
  templateUrl: './teacher-time-slots.component.html',
  styleUrls: ['./teacher-time-slots.component.css']
})
export class TeacherTimeSlotsComponent implements OnInit {

  timeSlots: TimeSlot[];
  teacherTimeArr: Date[] = [];

  constructor(
    private timeSlotService: TimeSlotService,
    private login: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.timeSlotService.getTimeSlotsByTeacher( this.login.getTeacher().teacherId ).subscribe(
      responce => {
        this.timeSlots = responce;
        for (const time of this.timeSlots){
          this.teacherTimeArr.push(new Date(time.startTime));
        }
      }
    );
  }

  newTimeSlot(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  timeSlotDetails(id: number): void {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
