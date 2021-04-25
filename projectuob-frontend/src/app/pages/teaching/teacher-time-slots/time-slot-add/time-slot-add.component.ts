import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {LoginService} from '../../../../services/common/login.service';
import {TimeSlot} from '../time-slot.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-time-slot-add',
  templateUrl: './time-slot-add.component.html',
  styleUrls: ['./time-slot-add.component.css']
})
export class TimeSlotAddComponent implements OnInit {

  timeSlotForm: FormGroup;
  endTime = '';

  constructor(
    private timeSlotService: TimeSlotService,
    private login: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.timeSlotForm = new FormGroup({
      date: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl(this.endTime)
    });
  }

  createTimeSlot(): void {
    const d = new Date(this.timeSlotForm.value.date);
    const sd = new Date(this.timeSlotForm.value.date);
    const time = this.timeSlotForm.value.startTime;
    sd.setHours(time.split(':')[0]);
    sd.setMinutes(time.split(':')[1]);
    const ed = new Date(sd);
    ed.setMinutes(sd.getMinutes() + 120);
    console.log(ed.toString());
    console.log(sd.toString());
    const timeSlot = new TimeSlot(this.login.getTeacher().teacherId, sd, ed, d);
    this.timeSlotService.createTimeSlot(timeSlot).subscribe();
    this.router.navigate(['/teaching/time-slots']);
  }
}
