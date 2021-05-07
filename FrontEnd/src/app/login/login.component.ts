import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { login } from '../models/login.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  eye: boolean

  constructor(private networkUserservice: NetworkUserService) {


  }

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


    this.networkUserservice.postlogin(Login).subscribe(
      data => {
        console.log(`res : ${data}`);
        alert(JSON.stringify(Login))
      },
      error => {

      })
  }

  onClick() {
    this.eye = !this.eye
    console.log(this.eye);

  }




}
