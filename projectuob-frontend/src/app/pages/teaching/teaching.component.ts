import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/common/login.service';
import {TeachersService} from '../../services/backend/teachers.service';
import {Teacher} from '../masters/teacher/teacher.model';
import {Student} from '../masters/student/student.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  private student: Student;
  public teacher: Teacher;
  public newTeacher = false;

  constructor(private login: LoginService,
              private teacherService: TeachersService,
              private router: Router) { }

  ngOnInit(): void {
    this.student = this.login.getStudent();
    this.teacherService.findTeacherByEmail(this.student.studentEmail).subscribe(
      responce => {
        if ( responce.length === 0) {
          this.newTeacher = true;
        }else {
          this.teacher = responce[0];
          this.login.setTeacher(this.teacher);
        }
      }
    );
  }

  newTeacherPage(): void {
    this.router.navigate(['/teacher/new']);
  }
}
