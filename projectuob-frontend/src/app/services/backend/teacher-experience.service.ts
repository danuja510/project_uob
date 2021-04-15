import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherExperience} from '../../pages/masters/teacher/teacher-experience.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherExperienceService{

  baseUrl = 'http://localhost:8080/api/teacherExperiences/';

  constructor(private http: HttpClient) {
  }

  addTeacherExperience(teacherExperience: TeacherExperience): Observable<TeacherExperience>{
    return this.http.post<TeacherExperience>(this.baseUrl, teacherExperience);
  }
}
