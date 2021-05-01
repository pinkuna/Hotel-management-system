import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) {
      //return console.log(`Error`);
      ; 
    }

    const values = loginForm.value;
    let Login = new login();
    Login.username = values.username;
    Login.password = values.password;
    alert(JSON.stringify(Login))
  }

}
