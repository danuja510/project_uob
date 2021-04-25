import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {TimeSlot} from '../time-slot.model';

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
    private router: Router
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
    this.timeSlotService.deleteTimeSlot(this.timeSlot.id).subscribe();
    this.router.navigate(['/teaching/time-slots']);
  }
}
