import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseRating} from '../../shared/course-rating.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService{

  private baseCourseUrl = 'http://localhost:8080/api/courseRatings';

  constructor(private http: HttpClient) {}

  getCourseRatings(): Observable<CourseRating[]> {
    return this.http.get<GetResponse>(this.baseCourseUrl).pipe(
      map(responce => responce._embedded.courseRatings));
  }

  getCourseAverageRatingByCourse(id: number): Observable<{itemId: number, rating: number}> {
    const url = this.baseCourseUrl + '/search/getCourseAverageRating/?id=' + id;
    return this.http.get<{itemId: number, rating: number}>(url);
  }

  addCourseRating(rating: CourseRating): Observable<any> {
    return this.http.post(this.baseCourseUrl, rating);
  }
}

interface GetResponse {
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
