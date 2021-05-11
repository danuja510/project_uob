import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Subject} from '../../shared/subjects.model';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService{

  private baseUrl = AppConfig.backendUrl + 'api/subjects';

  constructor( private http: HttpClient) {
  }

  getSubjects(): Observable<Subject[]>{
    return this.http.get<GetResponce>(this.baseUrl ).pipe(
      map(responce => responce._embedded.subjects)
    );
  }

  addSubject(subject: Subject): Observable<any>{
    return this.http.post(this.baseUrl, subject);
  }
}

interface GetResponce {
  _embedded: {
    subjects: Subject[]
  };
}
