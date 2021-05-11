import { Component, OnInit } from '@angular/core';
import {Course} from './course.model';
import {CoursesService} from '../../../services/backend/courses.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CartService} from '../../../services/common/cart.service';
import {RatingService} from '../../../services/backend/rating.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  courseRatings: {itemId: number, rating: number}[] =  [];
  currentPage = 1;
  totalElements = 0;
  pageSize = 8;

  previousSubject = '';
  currentSubject = '';

  previousSearch = '';
  currentSearch = '';

  constructor(private courseService: CoursesService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private ratingService: RatingService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {

        this.pageSize = queryParams.size ? queryParams.size : this.pageSize;
        this.currentPage = queryParams.page ? queryParams.page : this.currentPage;

        if (queryParams.subject){
          this.currentSubject = queryParams.subject;
          if (this.currentSubject !== this.previousSubject) {
            this.currentPage = 1;
            this.previousSubject = this.currentSubject;
          }
          this.courseService.filterBySubjectPaginate(this.currentSubject, this.currentPage - 1, this.pageSize).subscribe(
            this.getNext()
          );
        } else if (queryParams.search){
          this.currentSearch = queryParams.search;
          if (this.currentSearch !== this.previousSearch) {
            this.currentPage = 1;
            this.previousSearch = this.currentSearch;
          }
          this.courseService.searchByCourseNamePaginate(this.currentSearch, this.currentPage - 1, this.pageSize).subscribe(
            this.getNext()
          );
        }else {
          this.courseService.getCoursesPaginate(this.currentPage - 1, this.pageSize).subscribe(
            this.getNext()
          );
        }
      }
    );
    // this.route.params.subscribe( params => {
    //   if (params['id']){
    //     this.courseService.filterBySubject(params.id).subscribe(
    //       data => {
    //         this.courses = data;
    //       }
    //     );
    //   }else{
    //     this.courseService.getCourses().subscribe(
    //       data => {
    //         this.courses = data;
    //       }
    //     );
    //   }
    // });
  }

  private getNext() {
    // @ts-ignore
    return data => {
      this.courses = data._embedded.courses;
      this.currentPage = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
      this.courseRatings = [];


      for (const course of this.courses) {
        // @ts-ignore
        this.ratingService.getCourseAverageRatingByCourse(course.courseId).subscribe({
          next: response => {
            this.courseRatings.push(response);
          }, error: err => {
            // @ts-ignore
              this.courseRatings.push({itemId: course.courseId, rating: 0});
            }
        }
        );
      }
    };
  }

  paginate(): void {
    this.router.navigate([this.route.snapshot.url], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage},
      queryParamsHandling: 'merge'}
      );
  }

  updatePageSize(value: EventTarget): void {
    this.router.navigate([this.route.snapshot.url], {
      relativeTo: this.route,
      queryParams: {
        // @ts-ignore
        size: value.value},
      queryParamsHandling: 'merge'}
    );
  }

  addToCart(course: Course): void {
    this.cartService.addCartItem(course);
  }

  getAverageRating(id: number): number {
    // for (const rating of this.courseRatings) {
    //   if (rating.itemId === id){
    //     return rating.rating;
    //   }
    // }
    // @ts-ignore
    return this.courseRatings.find(({itemId}) => itemId === id).rating;
  }
}
