import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../../pages/masters/course/course.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private baseUrl = 'http://localhost:8080/api/recommender/';

  constructor(private http: HttpClient) {
  }

  getCourseRecommendations(userId: number, nRec: number): Observable<number[]> {
    const url = this.baseUrl + 'course/get-recommendations/';
    return this.http.get<GetResponce>(url + '?userId=' + userId + '&nRec=' + nRec)
      .pipe(
        map( responce => responce.itemIds )
      );

  }
}

interface GetResponce {
  itemIds: number[];
}
