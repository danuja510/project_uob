import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Purchase} from '../../pages/components/checkout/purchase.model';
import {Observable} from 'rxjs';
import AppConfig from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = AppConfig.backendUrl + 'api/checkout/purchase';

  constructor(private httpClient: HttpClient) {}

  placeOrder(purchase: Purchase): Observable<any> {
   return this.httpClient.post<Purchase>(this.baseUrl, purchase);
  }
}
