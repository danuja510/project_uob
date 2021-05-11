import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoursesService} from '../../services/backend/courses.service';
import {RecommendationsService} from '../../services/backend/recommendations.service';
import {Course} from '../masters/course/course.model';
import {Teacher} from '../masters/teacher/teacher.model';
import {TeachersService} from '../../services/backend/teachers.service';
import {Subscription} from 'rxjs';
import {CartService} from '../../services/common/cart.service';
import {LoginService} from '../../services/common/login.service';
import {RatingService} from '../../services/backend/rating.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public recommendedCourses: Course[] = [];
  public bestSellingCourses: Course[] = [];
  public latestCourses: Course[] = [];
  courseRatings: {itemId: number, rating: number}[] =  [];
  courseBSRatings: {itemId: number, rating: number}[] =  [];
  courseLRatings: {itemId: number, rating: number}[] =  [];
  teacherRatings: {itemId: number, rating: number}[] =  [];
  teacherBSRatings: {itemId: number, rating: number}[] =  [];
  private tempCourse: Course | undefined;
  private recommendedCoursesIds: number[] = [];
  public recommendedTeachers: Teacher[] = [];
  public bestSellingTeachers: Teacher[] = [];
  private recommendedTeachersIds: number[] = [];

  constructor(private courseService: CoursesService,
              private teacherService: TeachersService,
              private recommenderService: RecommendationsService,
              private cartService: CartService,
              public login: LoginService,
              private ratingService: RatingService) { }

  ngOnInit(): void {
    this.login.studentSub.subscribe(
      responce3 => {
        if (responce3) {
          this.recommenderService.getCourseRecommendations(responce3.studentNumber, 5).subscribe(
            responce => {
              this.recommendedCoursesIds = responce;
              for ( const id of this.recommendedCoursesIds ){
                this.courseService.getCourse(id).subscribe(
                  responce2 => {
                    this.recommendedCourses.push(responce2);
                    // @ts-ignore
                    this.ratingService.getCourseAverageRatingByCourse(responce2.courseId).subscribe(
                      {
                        next: response4 => {
                          this.courseRatings.push(response4);
                        }, error: err => {
                          // @ts-ignore
                          this.courseRatings.push({itemId: responce2.courseId, rating: 0});
                        }
                      }
                    );
                  }
                );
              }
            }
          );
          this.recommenderService.getTeacherRecommendations(responce3.studentNumber, 5).subscribe(
            response => {
              this.recommendedTeachersIds = response;
              for (const id of this.recommendedTeachersIds){
                this.teacherService.getTeacher(id).subscribe(
                  response2 => {
                    this.recommendedTeachers.push(response2);
                    // @ts-ignore
                    this.ratingService.getTeacherAverageRatingByTeacher(response2.teacherId).subscribe(
                      {
                        next: response4 => {
                          this.teacherRatings.push(response4);
                        }, error: err => {
                          // @ts-ignore
                          this.teacherRatings.push({itemId: response2.teacherId, rating: 0});
                        }
                      }
                    );
                  }
                );
              }
            }
          );
        }
      }
    );
    this.courseService.getCourseByPurchases(5).subscribe(
      response5 => {
        this.bestSellingCourses = response5;
        for (const course of this.bestSellingCourses) {
          this.ratingService.getCourseAverageRatingByCourse(course.courseId).subscribe(
            {
              next: response4 => {
                this.courseBSRatings.push(response4);
              }, error: err => {
                // @ts-ignore
                this.courseBSRatings.push({itemId: course.courseId, rating: 0});
              }
            }
          );
        }
      }
    );
    this.courseService.getLatestCourses(5).subscribe(
      response6 => {
        this.latestCourses = response6;
        for (const course of this.latestCourses) {
          this.ratingService.getCourseAverageRatingByCourse(course.courseId).subscribe(
            {
              next: response4 => {
                this.courseLRatings.push(response4);
              }, error: err => {
                // @ts-ignore
                this.courseLRatings.push({itemId: course.courseId, rating: 0});
              }
            }
          );
        }
      }
    );
    this.teacherService.getTeachersByPurchases( 5).subscribe(
      response7 => {
        this.bestSellingTeachers = response7;
        for (const teacher of this.bestSellingTeachers) {
          this.ratingService.getTeacherAverageRatingByTeacher(teacher.teacherId).subscribe(
            {
              next: response4 => {
                this.teacherBSRatings.push(response4);
              }, error: err => {
                // @ts-ignore
                this.teacherBSRatings.push({itemId: teacher.teacherId, rating: 0});
              }
            }
          );
        }
      }
    );
  }

  ngOnDestroy(): void {
    // this.loginServiceSub.unsubscribe();
    // if (this.login.getStudent()){
    //   // this.courseServiceSub.unsubscribe();
    //   // this.recommenderServiceSub.unsubscribe();
    // }
    // // this.teacherServiceSub.unsubscribe();
  }

  addToCart(course: Course): void {
    this.cartService.addCartItem(course);
  }

  getAverageRating(id: number): number {
    // @ts-ignore
    return this.courseRatings.find(({itemId}) => itemId === id).rating;
  }

  getAverageTeacherRating(id: number): number {
    // @ts-ignore
    return this.teacherRatings.find(({itemId}) => itemId === id).rating;
  }

  getAverageCBSRating(courseId: number): number {
    // @ts-ignore
    return this.courseBSRatings.find(({itemId}) => itemId === courseId).rating;
  }

  getAverageBSTeacherRating(teacherId: number): number {
    // @ts-ignore
    return this.teacherBSRatings.find(({itemId}) => itemId === teacherId).rating;
  }

  getAverageLRating(courseId: number): number {
    // @ts-ignore
    return this.courseLRatings.find(({itemId}) => itemId === courseId).rating;
  }
}
