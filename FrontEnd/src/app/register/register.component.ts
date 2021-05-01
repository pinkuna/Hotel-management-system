import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { register } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      //return console.log(`Error`);
      ; 
    }

    const values = registerForm.value;
    let Register = new register();
    Register.username = values.username;
    Register.password = values.password;
    Register.Usename = values.Usename;
    Register.phonNum = values.phonNum;
    Register.idcard = values.idcard;
    Register.address = values.address;
    Register.email = values.email;

    alert(JSON.stringify(Register))
  }

}
