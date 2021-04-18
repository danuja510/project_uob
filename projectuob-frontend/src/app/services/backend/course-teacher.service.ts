import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseTeacher} from '../../pages/masters/course/course-teacher.model';
import {Observable} from 'rxjs';

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
}
