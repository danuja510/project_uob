import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TeacherTag} from '../../pages/masters/teacher/teacher-tag.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherTagService{
  baseUrl = 'http://localhost:8080/api/teacherTags/';

  constructor(private http: HttpClient) {
  }

  getDistinctTags(): Observable<TeacherTag[]>{
    const url = this.baseUrl + 'search/getDistinctTags';
    return this.http.get<GetResponce>(url).pipe(
      map( responce => responce._embedded.teacherTags)
    );
  }

  addTeacherTag(teacherTag: TeacherTag): Observable<TeacherTag>{
    return this.http.post<TeacherTag>(this.baseUrl, teacherTag);
  }
}

interface GetResponce{
  _embedded: {
    teacherTags: TeacherTag[]
  };
}
