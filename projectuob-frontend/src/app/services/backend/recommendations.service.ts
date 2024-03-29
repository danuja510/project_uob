import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private baseUrl = AppConfig.backendUrl + 'api/recommender/';

  constructor(private http: HttpClient) {
  }

  getCourseRecommendations(userId: number, nRec: number): Observable<number[]> {
    const url = this.baseUrl + 'course/get-recommendations/';
    return this.http.get<GetResponce>(url + '?userId=' + userId + '&nRec=' + nRec)
      .pipe(
        map( responce => responce.itemIds )
      );

  }

  getTeacherRecommendations(userId: number, nRec: number): Observable<number[]> {
    const url = this.baseUrl + 'teacher/get-recommendations/';
    return this.http.get<GetResponce>(url + '?userId=' + userId + '&nRec=' + nRec)
      .pipe(
        map( response => response.itemIds )
      );

  }
}

interface GetResponce {
  itemIds: number[];
}
