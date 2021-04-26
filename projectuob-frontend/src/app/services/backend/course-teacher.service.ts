import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseTeacher} from '../../pages/masters/course/course-teacher.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseTeacherService{

  baseUrl = 'http://localhost:8080/api/courseTeachers';

  constructor(private http: HttpClient) {
  }

  addCourseTeacher(courseTeacher: CourseTeacher): Observable<CourseTeacher> {
    return this.http.post<CourseTeacher>(this.baseUrl, courseTeacher);
  }

  getCourseTeacher(id: number): Observable<CourseTeacher>{
    const url = this.baseUrl + '/search/findByCourseIdEquals/?id=' + id;
    return this.http.get<GetResponse>(url).pipe(
      map( response => response._embedded.courseTeachers[0])
    );
  }
}

interface GetResponse{
  _embedded: {
    courseTeachers: CourseTeacher[]
  };
}
