import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseRating} from '../../shared/course-rating.model';
import {Course} from '../../pages/masters/course/course.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService{

  private baseCourseUrl = 'http://localhost:8080/api/courseRatings';

  constructor(private http: HttpClient) {}

  getCourseRatings(): Observable<CourseRating[]> {
    return this.http.get<GetResponce>(this.baseCourseUrl).pipe(
      map(responce => responce._embedded.courseRatings));
  }

  addCourseRating(rating: CourseRating): Observable<any> {
    return this.http.post(this.baseCourseUrl, rating);
  }
}

interface GetResponce {
  _embedded: {
    courseRatings: CourseRating[];
  };
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}
