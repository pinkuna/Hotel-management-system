import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';
import { checkout } from '../models/Checkout.model';
import { login } from '../models/login.model';
import { register } from '../models/register.model';
import { Report } from '../models/Reports.model';
import { Response } from '../models/Respones.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkUserService {
  constructor(private httpClient: HttpClient) {}


  postRegister(Register: register): Observable<Response> {
    return this.httpClient.post<Response>('http://localhost:8004/api/register', Register)
  }

  postlogin(Login: login): Observable<Response> {
    return this.httpClient.post<Response>('http://localhost:8004/api/login', Login)
  }

  postbooking(booking: Booking): Observable<Response> {
    return this.httpClient.post<Response>('http://localhost:8004/api/booking', booking)
  }

  postReport(report: Report): Observable<Response> {
    return this.httpClient.post<Response>('http://localhost:8004/api/report', report)
  }

  postCheckout(Checkuot: checkout): Observable<Response> {
    return this.httpClient.post<Response>('http://localhost:8004/api/checkout', Checkuot)
  }
}
