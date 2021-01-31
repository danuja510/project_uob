import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../../pages/masters/teacher/teacher.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachersService{

  private baseUrl = 'http://localhost:8080/api/teachers';

  constructor( private http: HttpClient) {
  }

  getTeachers(): Observable<Teacher[]>{
    return this.http.get<GetResponce>(this.baseUrl,  ).pipe(
      map(responce => responce._embedded.teachers)
    );
  }

  addTeachers(teacher: Teacher): Observable<any>{
    return this.http.post(this.baseUrl, teacher);
  }
}

interface GetResponce {
  _embedded: {
    teachers: Teacher[]
  };
}
