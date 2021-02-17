import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../../services/backend/courses.service';
import {Course} from '../course.model';
import {CartService} from '../../../../services/common/cart.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CoursesService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.courseService.getCourse(+params.id).subscribe(
          data => {
            this.course = data;
          }
        );
      }
    );
  }

  addToCart() {
    this.cartService.addCartItem(this.course);
  }
}
