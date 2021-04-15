import {Injectable} from '@angular/core';
import {TeacherDetail} from '../../pages/masters/teacher/teacher-detail.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherDetailService{
  baseUrl = 'http://localhost:8080/api/teacherDetails/';

  constructor(private http: HttpClient){}

  addTeacherDetails(teacherDetails: TeacherDetail): Observable<TeacherDetail>{
    return this.http.post<TeacherDetail>(this.baseUrl, teacherDetails);
  }
}

interface GetResponces{
  _embedded: {
    teacherDetails: TeacherDetail[]
  };
}
