import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register, registerRequire } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkUserService {
  constructor(private httpClient: HttpClient) {}

  constructor(private httpClient: HttpClient) { }

  postRegister(Register: register): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8004/api/register',Register)
  }
}
