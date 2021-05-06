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

  postRegister(Register: register): Observable<registerRequire>{
    return this.httpClient.post<registerRequire>('http://localhost:8004/api/register',this.makeFormData(Register))
    

  }

  makeFormData(Register: register): FormData{
    const formData = new FormData()
    formData.append('username',Register.username)
    formData.append('Usesurname',Register.Usesurname)
    formData.append('password',Register.password)
    formData.append('repassword',Register.repassword)
    formData.append('Usename',Register.Usename)
    formData.append('idcard',`${Register.idcard}`)
    formData.append('phonNum',`${Register.phonNum}`)
    formData.append('email',Register.email)
    formData.append('address',Register.address)
  
    return formData;
  }
}
