import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseTag} from '../../pages/masters/course/course-tag.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseTagService{

  baseUrl = 'http://localhost:8080/api/courseTags';

  constructor(private http: HttpClient) {
  }

  addCourseTag(courseTag: CourseTag): Observable<CourseTag>{
    return this.http.post<CourseTag>(this.baseUrl, courseTag);
  }

  getDistinctTags(): Observable<CourseTag[]>{
    const url = this.baseUrl + '/search/getDistinctTags';
    return this.http.get<GetResponce>(url).pipe(
      map( responce => responce._embedded.courseTags)
    );
  }
}

interface GetResponce{
  _embedded: {
    courseTags: CourseTag[]
  };
}
