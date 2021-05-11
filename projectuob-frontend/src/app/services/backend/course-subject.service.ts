import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseSubject} from '../../pages/masters/course/course-subject.model';
import {Observable} from 'rxjs';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CourseSubjectService{

  baseUrl = AppConfig.backendUrl + 'api/courseSubjects';

  constructor(private http: HttpClient) {
  }

  addCourseSubject(courseSubject: CourseSubject): Observable<CourseSubject>{
    return this.http.post<CourseSubject>(this.baseUrl, courseSubject);
  }
}
