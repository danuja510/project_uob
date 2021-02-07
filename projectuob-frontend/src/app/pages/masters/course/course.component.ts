import { Component, OnInit } from '@angular/core';
import {Course} from './course.model';
import {CoursesService} from '../../../services/backend/courses.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  constructor(private courseService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if (params['id']){
        this.courseService.filterBySubject(params.id).subscribe(
          data => {
            this.courses = data;
          }
        );
      }else{
        this.courseService.getCourses().subscribe(
          data => {
            this.courses = data;
          }
        );
      }
    });
  }

}
