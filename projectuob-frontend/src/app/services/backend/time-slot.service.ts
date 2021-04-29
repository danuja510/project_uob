import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TimeSlot} from '../../pages/teaching/teacher-time-slots/time-slot.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotService{

  baseUrl = 'http://localhost:8080/api/timeSlots/';

  constructor(
    private http: HttpClient
  ) {}

  createTimeSlot(timeSlot: TimeSlot): Observable<TimeSlot> {
    return this.http.post<TimeSlot>(this.baseUrl, timeSlot);
  }

  updateTimeSlot(timeSlot: TimeSlot, timeSlotId: number): Observable<TimeSlot> {
    return this.http.put<TimeSlot>(this.baseUrl + timeSlotId, timeSlot);
  }

  getTimeSlots(): Observable<TimeSlot[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map( response => response._embedded.timeSlots
      )
    );
  }

  getTimeSlotsByTeacher(teacherId: number): Observable<TimeSlot[]> {
    const url = this.baseUrl + 'search/findByTeacherIdEquals/?id=' + teacherId;
    return this.http.get<GetResponse>(url).pipe(
      map( responce => responce._embedded.timeSlots)
    );
  }

  getTimeSlotsByStudent(studentId: number): Observable<TimeSlot[]> {
    const url = this.baseUrl + 'search/findByStudentIdEquals/?id=' + studentId;
    return this.http.get<GetResponse>(url).pipe(
      map( responce => responce._embedded.timeSlots)
    );
  }

  getNotReservedTimeSlotsByTeacher(teacherId: number): Observable<TimeSlot[]> {
    const url = this.baseUrl + 'search/findByTeacherIdAndAndNotReserved/?id=' + teacherId;
    return this.http.get<GetResponse>(url).pipe(
      map( responce => responce._embedded.timeSlots)
    );
  }

  getTimeSlot(id: number): Observable<TimeSlot>{
    const url = this.baseUrl + id;
    return this.http.get<TimeSlot>(url);
  }

  deleteTimeSlot(id: number): Observable<any>{
    const url = this.baseUrl + id;
    return this.http.delete(url);
  }
}

interface GetResponse {
  _embedded: {
    timeSlots: TimeSlot[]
  };
}
