import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login.model';
import { register, registerRequire } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkUserService {
  constructor(private httpClient: HttpClient) {}


  postRegister(Register: register): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8004/api/register', Register)
  }

  postlogin(Login: login): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8004/api/login', Login)
  }
}
