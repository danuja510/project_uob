import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseTag} from '../../pages/masters/course/course-tag.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CourseTagService{

  baseUrl = AppConfig.backendUrl + 'api/courseTags';

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
