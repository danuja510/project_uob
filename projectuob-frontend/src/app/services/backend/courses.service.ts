import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Course} from '../../pages/masters/course/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService{

  private baseUrl = 'http://localhost:8080/api/courses';

  constructor( private http: HttpClient) {
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
