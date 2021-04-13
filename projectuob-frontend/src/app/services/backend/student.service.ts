import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../../pages/masters/teacher/teacher.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Student} from '../../pages/masters/student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  private baseUrl = 'http://localhost:8080/api/students/';

  constructor( private http: HttpClient) {
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<GetResponses>(this.baseUrl ).pipe(
      map(responce => responce._embedded.students)
    );
  }

  getStudent(id: number): Observable<Student>{
    return this.http.get<Student>(this.baseUrl + '/' + id );
  }

  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl, student);
  }

  findStudentByEmail(email: string): Observable<Student[]>{
    const searchUrl = this.baseUrl + 'search/findByStudentEmailEquals?email=' + email;
    return this.http.get<GetResponses>(searchUrl).pipe(
      map( responce => responce._embedded.students)
    );
  }
}

interface GetResponses {
  _embedded: {
    students: Student[]
  };
}
