import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Course} from '../../pages/masters/course/course.model';
import {Teacher} from '../../pages/masters/teacher/teacher.model';
import {RecommendationsService} from './recommendations.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService{

  private baseUrl = 'http://localhost:8080/api/courses';

  constructor( private http: HttpClient, private recommender: RecommendationsService) {
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<GetResponce>(this.baseUrl ).pipe(
      map(responce => responce._embedded.courses)
    );
  }

  getCoursesPaginate(thePage: number, thePageSize: number): Observable<GetResponce>{
    return this.http.get<GetResponce>(this.baseUrl + '?page=' + thePage + '&size=' + thePageSize );
  }

  addCourse(course: Course): Observable<any>{
    return this.http.post(this.baseUrl, course);
  }

  filterBySubject(subjectId: string): Observable<Course[]>{
    const filterUrl = this.baseUrl + '/search/findBySubjectId?id=' + subjectId;
    return this.http.get<GetResponce>(filterUrl ).pipe(
      map(responce => responce._embedded.courses)
    );
  }

  filterBySubjectPaginate(subjectId: string, thePage: number, thePageSize: number): Observable<GetResponce>{
    const filterUrl = this.baseUrl + '/search/findBySubjectId?id=' + subjectId + '&page=' + thePage + '&size=' + thePageSize;
    return this.http.get<GetResponce>(filterUrl);
  }

  filterByTeacher(teacherId: string): Observable<Course[]>{
    const filterUrl = this.baseUrl + '/search/findByTeacherId?id=' + teacherId;
    return this.http.get<GetResponce>(filterUrl ).pipe(
      map(responce => responce._embedded.courses)
    );
  }

  filterByTeacherPaginate(teacherId: string, thePage: number, thePageSize: number): Observable<GetResponce>{
    const filterUrl = this.baseUrl + '/search/findByTeacherId?id=' + teacherId + '&page=' + thePage + '&size=' + thePageSize;
    return this.http.get<GetResponce>(filterUrl);
  }

  searchByCourseName(searchString: string): Observable<Course[]> {
    const searchUrl = this.baseUrl + '/search/findByCourseNameContaining?name=' + searchString;
    return this.http.get<GetResponce>(searchUrl ).pipe(
      map(responce => responce._embedded.courses)
    );
  }

  searchByCourseNamePaginate(searchString: string, thePage: number, thePageSize: number): Observable<GetResponce> {
    const searchUrl = this.baseUrl + '/search/findByCourseNameContaining?name=' + searchString
                                   + '&page=' + thePage
                                   + '&size=' + thePageSize;
    return this.http.get<GetResponce>(searchUrl);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + '/' + id );
  }

  getCourseByEnrolledStudent(id: number): Observable<Course[]> {
    const url = this.baseUrl + '/search/findByEnrolledStudent/?id=' + id;
    return this.http.get<GetResponce>(url).pipe(
      map( response => response._embedded.courses)
    );
  }

  // getRecommendedCourses(userId: number, nRec: number): Observable<Course[]> {
  //
  //   //
  //   //   .subscribe(responce =>
  //   // {
  //   //   courseIds = responce;
  //   //   for (const id of courseIds){
  //   //     this.getCourse(id).subscribe( responce2 => {
  //   //       course.push(responce2);
  //   //     });
  //   //   }
  //   // });
  //   return new Observable<Course[]>(course);
  // }
}

interface GetResponce {
  _embedded: {
    courses: Course[];
  };
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}
