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
    return this.http.get<GetResponce>(this.baseUrl,  ).pipe(
      map(responce => responce._embedded.courses)
    );
  }

  addTeachers(course: Course): Observable<any>{
    return this.http.post(this.baseUrl, course);
  }
}

interface GetResponce {
  _embedded: {
    courses: Course[]
  };
}
