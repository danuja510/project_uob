import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../../pages/masters/teacher/teacher.model';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class TeachersService{

  private baseUrl = AppConfig.backendUrl + 'api/teachers';

  constructor( private http: HttpClient) {
  }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<GetResponses>(this.baseUrl ).pipe(
      map(responce => responce._embedded.teachers)
    );
  }

  getTeacher(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(this.baseUrl + '/' + id );
  }

  addTeacher(teacher: Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(this.baseUrl, teacher);
  }

  filterBySubject(subjectId: string): Observable<Teacher[]>{
    const filterUrl = this.baseUrl + '/search/findBySubjectId?id=' + subjectId;
    return this.http.get<GetResponses>(filterUrl ).pipe(
      map(responce => responce._embedded.teachers)
    );
  }

  findTeacherByEmail(email: string): Observable<Teacher[]>{
    const searchUrl = this.baseUrl + '/search/findByTeacherEmailEquals?email=' + email;
    return this.http.get<GetResponses>(searchUrl).pipe(
      map( responce => responce._embedded.teachers)
    );
  }

  getTeachersByStudentEnrollment(id: number): Observable<Teacher[]>{
    const url = this.baseUrl + '/search/findByEnrolledStudent/?id=' + id;
    return this.http.get<GetResponses>(url).pipe(
      map( responce => responce._embedded.teachers)
    );
  }

  getTeachersByPurchases(size: number): Observable<Teacher[]>{
    const url = this.baseUrl + '/search/getTeachersByPurchases?size=' + size;
    return this.http.get<GetResponses>(url).pipe(
      map( response => response._embedded.teachers)
    );
  }
}

interface GetResponses {
  _embedded: {
    teachers: Teacher[]
  };
}
