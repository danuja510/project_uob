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
  courseRatings: {itemId: number, rating: number}[] =  [];
  private tempCourse: Course | undefined;
  private recommendedCoursesIds: number[] = [];
  private recommendedTeachers: Teacher[] = [];
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
                    this.ratingService.getCourseAverageRatingByCourse(responce2.courseId).subscribe(
                      {
                        next: response4 => {
                          this.courseRatings.push(response4);
                        }, error: err => {
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
                  }
                );
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
}
