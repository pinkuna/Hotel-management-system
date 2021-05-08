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
  constructor(private httpClient: HttpClient) { }

  postRegister(Register: register): Observable<Response> {
    return this.httpClient.post<Response>(`register`, Register,
      {
        withCredentials: true
      })
  }

  postlogin(Login: login): Observable<Response> {
    return this.httpClient.post<Response>(`login`, Login,
      {
        withCredentials: true
      })
  }

  postbooking(booking: Booking): Observable<Response> {
    return this.httpClient.post<Response>(`booking`, booking,
      {
        withCredentials: true
      })
  }

  postReport(report: Report): Observable<Response> {
    return this.httpClient.post<Response>(`report`, report,
      {
        withCredentials: true
      })
  }

  postCheckout(Checkuot: checkout): Observable<Response> {
    return this.httpClient.post<Response>(`checkout`, Checkuot,
      {
        withCredentials: true
      })
  }
}
