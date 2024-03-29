import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/common/login.service';
import {TimeSlotService} from '../../../services/backend/time-slot.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeSlot} from '../../teaching/teacher-time-slots/time-slot.model';

@Component({
  selector: 'app-student-time-slots',
  templateUrl: './student-time-slots.component.html',
  styleUrls: ['./student-time-slots.component.css']
})
export class StudentTimeSlotsComponent implements OnInit {

  timeSlots: TimeSlot[];

  constructor(
    private login: LoginService,
    private timeSlotService: TimeSlotService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.timeSlotService.getFutureTimeSlotsByStudent(this.login.getStudent().studentNumber).subscribe(
      response => {
        this.timeSlots = response;
      }
    );
  }

  timeSlotDetails(id: number): void {
    this.router.navigate([id], {relativeTo:  this.route});
  }
}
