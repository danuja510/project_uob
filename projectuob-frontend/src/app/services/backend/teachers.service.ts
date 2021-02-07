import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../../pages/masters/teacher/teacher.model';
import {map} from 'rxjs/operators';
import {Course} from '../../pages/masters/course/course.model';

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

  addTeacher(teacher: Teacher): Observable<any>{
    return this.http.post(this.baseUrl, teacher);
  }

  filterBySubject(subjectId: string): Observable<Teacher[]>{
    const filterUrl = this.baseUrl + '/search/findBySubjectId?id=' + subjectId;
    return this.http.get<GetResponce>(filterUrl,  ).pipe(
      map(responce => responce._embedded.teachers)
    );
  }
}

interface GetResponce {
  _embedded: {
    teachers: Teacher[]
  };
}
