import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/common/login.service';
import {CoursesService} from '../../../services/backend/courses.service';
import {Router} from '@angular/router';
import {Course} from '../../masters/course/course.model';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  courses: Course[];

  constructor(
    private login: LoginService,
    private courseService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseService.getCourseByEnrolledStudent(this.login.getStudent().studentNumber).subscribe(
      response => {
        this.courses = response;
      }
    );
  }

}
