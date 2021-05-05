import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { register } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  eye: boolean

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
    Register.repassword = values.repassword;
    Register.Usename = values.Usename;
    Register.Usesurname = values.Usesurname;
    Register.phonNum = values.phonNum;
    Register.idcard = values.idcard;
    Register.address = values.address;
    Register.email = values.email;

    alert(JSON.stringify(Register))
  }
  onClick() {
    this.eye = !this.eye
    console.log(this.eye);

  }

}
