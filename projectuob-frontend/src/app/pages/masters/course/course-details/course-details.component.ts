import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../../../services/backend/courses.service';
import {Course} from '../course.model';
import {CartService} from '../../../../services/common/cart.service';
import {RatingService} from '../../../../services/backend/rating.service';
import {CourseRating} from '../../../../shared/course-rating.model';
import {LoginService} from '../../../../services/common/login.service';
import {CourseEnrollmentService} from '../../../../services/backend/course-enrollment.service';
import {CourseEnrollment} from '../../student/student-course-enrollments/course-enrollment.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  courseEnrollment: CourseEnrollment;
  courseEnrolled = false;

  constructor(private route: ActivatedRoute,
              private courseService: CoursesService,
              private cartService: CartService,
              private ratingService: RatingService,
              private login: LoginService,
              private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.courseService.getCourse(+params.id).subscribe(
          data => {
            this.course = data;
            if (this.login.getStudent()){
              this.courseEnrollmentService.getCourseEnrollmentsByStudent(this.login.getStudent().studentNumber).subscribe(
                response => {
                  const enrolledCourses = response;
                  for (const tempEnrollment of enrolledCourses){
                    if (tempEnrollment.courseId === this.course.courseId){
                      this.courseEnrolled = true;
                      this.courseEnrollment = tempEnrollment;
                    }
                  }
                }
              );
            }
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

  reserveTimeSlot(): void {
    this.router.navigate(['reserve-time-slot'], {relativeTo: this.route});
  }
}
