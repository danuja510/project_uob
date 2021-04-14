import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/common/login.service';
import {TeachersService} from '../../services/backend/teachers.service';
import {Teacher} from '../masters/teacher/teacher.model';
import {Student} from '../masters/student/student.model';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  private student: Student;
  private teacher: Teacher;
  public newTeacher = false;

  constructor(private login: LoginService, private teacherService: TeachersService) { }

  ngOnInit(): void {
    this.student = this.login.getStudent();
    this.teacherService.findTeacherByEmail(this.student.studentEmail).subscribe(
      responce => {
        if ( responce.length === 0) {
          this.newTeacher = true;
        }else {
          this.teacher = responce[0];
          console.log(this.teacher);
          console.log(this.student);
        }
      }
    );
  }

  createTeacher(): void{
    this.teacherService.addTeacher(new Teacher( 'tt',
      this.student.studentFirstName,
      this.student.studentLastName,
      this.student.studentEmail,
      new Date(),
      true));
  }

}