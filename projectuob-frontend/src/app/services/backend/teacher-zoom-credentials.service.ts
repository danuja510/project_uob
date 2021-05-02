import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherZoomCredentials} from '../../pages/masters/teacher/teacher-zoom-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherZoomCredentialsService{

  baseUrl = 'http://localhost:8080/api/teacherZoomCredentialses/';

  constructor(
    private http: HttpClient
  ) {
  }

  getZoomCredentialsByTeacherId(id: number): Observable<TeacherZoomCredentials>{
    const url = this.baseUrl + id;
    return this.http.get<TeacherZoomCredentials>(url);
  }

  addTeacherZoomCredentials(zoomCredentials: TeacherZoomCredentials): Observable<TeacherZoomCredentials>{
    return this.http.post<TeacherZoomCredentials>(this.baseUrl, zoomCredentials);
  }
}
