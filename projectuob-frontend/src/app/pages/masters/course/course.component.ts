import { Component, OnInit } from '@angular/core';
import {Course} from './course.model';
import {CoursesService} from '../../../services/backend/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data;
      }
    );
  }

}
