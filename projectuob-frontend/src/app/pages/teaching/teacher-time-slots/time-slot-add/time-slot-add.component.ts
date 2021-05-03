import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TimeSlotService} from '../../../../services/backend/time-slot.service';
import {LoginService} from '../../../../services/common/login.service';
import {TimeSlot} from '../time-slot.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherZoomCredentialsService} from '../../../../services/backend/teacher-zoom-credentials.service';

@Component({
  selector: 'app-time-slot-add',
  templateUrl: './time-slot-add.component.html',
  styleUrls: ['./time-slot-add.component.css']
})
export class TimeSlotAddComponent implements OnInit {

  timeSlotForm: FormGroup;
  automatedScheduler = false;

  constructor(
    private timeSlotService: TimeSlotService,
    private login: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private teacherZoomCredentialsService: TeacherZoomCredentialsService
  ) { }

  ngOnInit(): void {
    this.timeSlotForm = new FormGroup({
      date: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      automatedSchedule: new FormControl('no')
    });

    this.teacherZoomCredentialsService.getZoomCredentialsByTeacherId(this.login.getTeacher().teacherId).subscribe(
      response => {
        if (response){
          this.automatedScheduler = true;
        }
      }
    );
  }

  createTimeSlot(): void {
    const d = new Date(this.timeSlotForm.value.date);
    const sd = new Date(this.timeSlotForm.value.date);
    const time = this.timeSlotForm.value.startTime;
    sd.setHours(time.split(':')[0]);
    sd.setMinutes(time.split(':')[1]);
    const ed = new Date(sd);
    ed.setMinutes(sd.getMinutes() + 60);

    const timeSlot = new TimeSlot(this.login.getTeacher().teacherId, sd, ed, d);
    timeSlot.automatedSchedule = this.timeSlotForm.value.automatedSchedule === 'yes';
    this.timeSlotService.createTimeSlot(timeSlot).subscribe();
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
