import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherZoomCredentials} from '../../pages/masters/teacher/teacher-zoom-credentials.model';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class TeacherZoomCredentialsService{

  baseUrl = AppConfig.backendUrl + 'api/teacherZoomCredentialses/';

  constructor(
    private http: HttpClient
  ) {
  }

  getZoomCredentialsByTeacherId(id: number): Observable<TeacherZoomCredentials>{
    const url = this.baseUrl + 'search/findByTeacherIdEquals/?id=' + id;
    return this.http.get<TeacherZoomCredentials>(url);
  }

  addTeacherZoomCredentials(zoomCredentials: TeacherZoomCredentials): Observable<TeacherZoomCredentials>{
    return this.http.post<TeacherZoomCredentials>(this.baseUrl, zoomCredentials);
  }
}
