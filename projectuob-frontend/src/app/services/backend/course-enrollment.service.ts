import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseEnrollment} from '../../pages/masters/student/student-course-enrollments/course-enrollment.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CourseEnrollmentService{

  baseUrl = AppConfig.backendUrl + 'api/courseEnrollments/';

  constructor(
    private http: HttpClient
  ) {
  }

  addCourseEnrollment(courseEnrollment: CourseEnrollment): Observable<CourseEnrollment>{
    return this.http.post<CourseEnrollment>(this.baseUrl, courseEnrollment);
  }

  updateCourseEnrollment(courseEnrollment: CourseEnrollment, no: number): Observable<CourseEnrollment>{
    const url = this.baseUrl + no;
    return this.http.put<CourseEnrollment>(url, courseEnrollment);
  }

  getCourseEnrollment(no: number): Observable<CourseEnrollment>{
    const url = this.baseUrl + no;
    return this.http.get<CourseEnrollment>(url);
  }

  getCourseEnrollmentsByStudent(studentId: number): Observable<CourseEnrollment[]>{
    const url = this.baseUrl + 'search/findByStudentIdEquals/?id=' + studentId;
    return this.http.get<GetResponse>(url).pipe(
      map( response => response._embedded.courseEnrollments)
    );
  }
}

interface GetResponse{
  _embedded: {
    courseEnrollments: CourseEnrollment[]
  };
}
