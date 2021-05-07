import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login, loginRes } from '../models/login.model';
import { register, registerRes } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkUserService {

  constructor(private httpClient: HttpClient) { }

  postRegister(Register: register): Observable<registerRes> {
    return this.httpClient.post<registerRes>('http://localhost:8004/api/register', Register)
  }

  postlogin(Login: login): Observable<loginRes> {
    return this.httpClient.post<loginRes>('http://localhost:8004/api/login', Login)
  }
}
