import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/common/login.service';
import {CoursesService} from '../../../services/backend/courses.service';
import {Course} from '../../masters/course/course.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {

  courses: Course[];

  constructor(
    private login: LoginService,
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.courseService.filterByTeacher(this.login.getTeacher().teacherId + '').subscribe(
      responce => {
        this.courses = responce;
      }
    );
  }

  newCourse(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
