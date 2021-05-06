import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { register } from '../models/register.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  eye: boolean;

  constructor(
    private networkUserservice: NetworkUserService,
    private location: Location
  ) {}

  ngOnInit(): void {}
  onSubmit(registerForm: NgForm) {
    if (registerForm.invalid) {
      //return console.log(`Error`);
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

    alert(JSON.stringify(Register));

    this.networkUserservice.postRegister(Register).subscribe(
      (data) => {
        this.location.back();
      },
      (error) => {
        // alert(error.error.message);
      }
    );
  }
  onClick() {
    this.eye = !this.eye;
    console.log(this.eye);
  }
}
