import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../services/common/login.service';
import {StudentService} from '../../services/backend/student.service';
import {Student} from '../masters/student/student.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  student: Student;
  studentSub: Subscription;

  constructor(
    private login: LoginService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentSub = this.login.studentSub.subscribe(
      response => {
        this.student = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.studentSub.unsubscribe();
  }

}
