import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(reportForm: NgForm) {
    if (reportForm.invalid) {
      //return console.log(`Error`);
      ;
    }

    const values = reportForm.value;
    let booking = new Booking();
    booking.name = values.name;
    booking.idcard = values.idcard;
    booking.email = values.email;
    booking.phonNum = values.phonNum;
    alert(JSON.stringify(booking))
  }
}