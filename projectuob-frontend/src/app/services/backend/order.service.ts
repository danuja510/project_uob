import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../pages/components/checkout/order.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  baseUrl = AppConfig.backendUrl + 'api/orders/';

  constructor(
    private http: HttpClient
  ) {
  }

  getOrdersByStudent(id: number): Observable<Order[]>{
    const url = this.baseUrl + 'search/findByStudentStudentNumber/?id=' + id;
    return this.http.get<GetResponse>(url).pipe(
      map( response => response._embedded.orders)
    );
  }
}

interface GetResponse{
  _embedded: {
    orders: Order[]
  };
}
