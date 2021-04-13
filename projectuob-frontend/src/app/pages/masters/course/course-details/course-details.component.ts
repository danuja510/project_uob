import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../../services/backend/courses.service';
import {Course} from '../course.model';
import {CartService} from '../../../../services/common/cart.service';
import {RatingService} from '../../../../services/backend/rating.service';
import {CourseRating} from '../../../../shared/course-rating.model';
import {LoginService} from '../../../../services/common/login.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private route: ActivatedRoute,
              private courseService: CoursesService,
              private cartService: CartService,
              private ratingService: RatingService,
              private login: LoginService) { }

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

  addToCart(): void {
    this.cartService.addCartItem(this.course);
  }

  addRating(rating: number): void {
    const courseRating: CourseRating = new CourseRating( this.login.getStudent().studentNumber, this.course.courseId, rating);
    this.ratingService.addCourseRating(courseRating).subscribe();
    console.log(courseRating);
  }
}
