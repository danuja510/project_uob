import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Scheduler} from '../../shared/scheduler.model';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService{

  baseUrl = AppConfig.backendUrl + 'api/scheduler/';

  constructor(
    private http: HttpClient) {
  }

  getSessionsList(id: number): Observable<Scheduler[]>{
    const url = this.baseUrl + 'list-sessions/?teacherId=' + id;
    return this.http.get<GetResponse>(url).pipe(
      map(response => response.meetings)
    );
  }

  validateCredentials(scheduler: Scheduler): Observable<boolean>{
    const url = this.baseUrl + 'validate-credentials/';
    return this.http.post<boolean>(url, scheduler);
  }

  createSession(teacherId: number, scheduler: Scheduler): Observable<Scheduler>{
    const url = this.baseUrl + 'create-session/?teacherId=' + teacherId;
    return this.http.post<Scheduler>(url, scheduler);
  }

  deleteSession(teacherId: number, scheduler: Scheduler): Observable<Scheduler>{
    const url = this.baseUrl + 'delete-session/?teacherId=' + teacherId;
    return this.http.post<Scheduler>(url, scheduler);
  }
}

interface GetResponse {
  meetings: Scheduler[];
}
