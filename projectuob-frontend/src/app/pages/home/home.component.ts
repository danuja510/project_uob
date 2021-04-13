import {Component, OnDestroy, OnInit} from '@angular/core';
import {CoursesService} from '../../services/backend/courses.service';
import {RecommendationsService} from '../../services/backend/recommendations.service';
import {Course} from '../masters/course/course.model';
import {Teacher} from '../masters/teacher/teacher.model';
import {TeachersService} from '../../services/backend/teachers.service';
import {Subscription} from 'rxjs';
import {CartService} from '../../services/common/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private recommendedCourses: Course[] = [];
  private tempCourse: Course | undefined;
  private recommendedCoursesIds: number[] = [];
  private recommendedTeachers: Teacher[];
  private recommendedTeachersIds: number[] = [];
  private courseServiceSub: Subscription;
  private teacherServiceSub: Subscription;
  private recommenderServiceSub: Subscription;

  constructor(private courseService: CoursesService,
              private teacherService: TeachersService,
              private recommenderService: RecommendationsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.recommenderServiceSub = this.recommenderService.getCourseRecommendations(5, 5).subscribe(
      responce => {
        this.recommendedCoursesIds = responce;
        for ( const id of this.recommendedCoursesIds ){
            this.courseServiceSub = this.courseService.getCourse(id).subscribe(
              responce2 => {
                this.recommendedCourses.push(responce2);

              }
            );
        }

      }
    );



    // console.log(this.recommendedCourses);
  }

  ngOnDestroy(): void {
    this.courseServiceSub.unsubscribe();
    // this.teacherServiceSub.unsubscribe();
    this.recommenderServiceSub.unsubscribe();
  }

  addToCart(course: Course): void {
    this.cartService.addCartItem(course);
  }
}
