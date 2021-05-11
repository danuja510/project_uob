import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherSubject} from '../../pages/masters/teacher/teacher-subject.model';
import {Observable} from 'rxjs';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService{

  baseUrl = AppConfig.backendUrl + 'api/teacherSubjects/';

  constructor(private http: HttpClient) {
  }

  addTeacherSubject(teacherSubject: TeacherSubject): Observable<TeacherSubject>{
    return this.http.post<TeacherSubject>(this.baseUrl, teacherSubject);
  }

}
