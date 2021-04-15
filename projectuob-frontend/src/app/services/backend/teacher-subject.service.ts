import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherSubject} from '../../pages/masters/teacher/teacher-subject.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService{
  baseUrl = 'http://localhost:8080/api/teacherSubjects/';

  constructor(private http: HttpClient) {
  }

  addTeacherSubject(teacherSubject: TeacherSubject): Observable<TeacherSubject>{
    return this.http.post<TeacherSubject>(this.baseUrl, teacherSubject);
  }

}
