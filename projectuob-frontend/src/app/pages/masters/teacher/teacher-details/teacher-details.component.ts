import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';
import {LoginService} from '../../../../services/common/login.service';
import {TeacherRating} from '../../../../shared/teacher-rating.model';
import {RatingService} from '../../../../services/backend/rating.service';
import {CoursesService} from '../../../../services/backend/courses.service';
import {Course} from '../../course/course.model';
import {CartService} from '../../../../services/common/cart.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  // @ts-ignore
  teacher: Teacher;
  teacherEnrolled = false;
  // @ts-ignore
  courses: Course[];
  courseRatings: {itemId: number, rating: number}[] =  [];

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeachersService,
    private login: LoginService,
    private ratingService: RatingService,
    private courseService: CoursesService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.teacherService.getTeacher( +params.id ).subscribe(
            data => {
              this.teacher = data;
              if (this.login.getStudent()){
                this.teacherService.getTeachersByStudentEnrollment(this.login.getStudent().studentNumber).subscribe(
                  response => {
                    const enrolledTeachers = response;
                    for (const tempEnrollment of enrolledTeachers){
                      if (tempEnrollment.teacherId === this.teacher.teacherId){
                        this.teacherEnrolled = true;
                      }
                    }
                  }
                );
              }
              // @ts-ignore
              this.courseService.filterByTeacher(this.teacher.teacherId).subscribe(
                response => {
                  this.courses = response;
                  for (const course of this.courses) {
                    // @ts-ignore
                    this.ratingService.getCourseAverageRatingByCourse(course.courseId).subscribe({
                        next: response2 => {
                          this.courseRatings.push(response2);
                        }, error: err => {
                          // @ts-ignore
                        this.courseRatings.push({itemId: course.courseId, rating: 0});
                        }
                      }
                    );
                  }
                }
              );
            }
        );
      }
    );
  }

  addRating(rating: number): void {
    // @ts-ignore
    const teacherRating: TeacherRating = new TeacherRating( this.login.getStudent().studentNumber, this.teacher.teacherId, rating);
    this.ratingService.addTeacherRating(teacherRating).subscribe();
  }

  getAverageRating(id: number): number {
    // @ts-ignore
    return this.courseRatings.find(({itemId}) => itemId === id).rating;
  }

  addToCart(course: Course): void {
    this.cartService.addCartItem(course);
  }
}
