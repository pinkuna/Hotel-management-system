import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Booking } from '../models/booking.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private networkUserservice: NetworkUserService) { }

  @ViewChild('bookingForm', { static: true }) bookingForm: NgForm


  ngOnInit(): void {
    const stats = JSON.parse(localStorage.getItem('_u') || '{}')

    var { name, idcard, email, phonenum, date } = {
      name: stats.usename,
      idcard: '',
      email: stats.email,
      phonenum: stats.phonenum,
      date: ''
    }
    setTimeout(() => {
      this.bookingForm.setValue({ name, idcard, email, phonenum, date })
    })
  }

  onSubmit(bookingForm: NgForm) {
    if (bookingForm.invalid) {
      //return console.log(`Error`);
      ;
    }

    const values = bookingForm.value;
    let booking = new Booking();
    booking.name = values.name;
    booking.idcard = values.idcard;
    booking.email = values.email;
    booking.phoneNum = values.phonenum;
    booking.date = values.date;
    booking.roomNum = values.roomNum;
    if (booking.idcard.toString().length == 13 && booking.phoneNum.toString().length == 9) {
      this.networkUserservice.postbooking(booking).subscribe(
        data => {
          console.log(data.status);
          if (data.status == 'success') {
            alert(`Booking Success`)
            window.location.href = '/'
          } else {
            alert(data.data)
            window.location.href = '/login'
          }
        },
        error => {
          alert(`Error 404`)
          window.location.href = '/booking'
        })
    } else {
      alert(`Form incorrect`)
    }
  }
}