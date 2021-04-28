import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { checkout } from 'src/app/models/Checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onCheckout(CheckoutForm: NgForm) {
    if (CheckoutForm.invalid) {
      //return console.log(`Error`); 
      ; 
    }

    const values = CheckoutForm.value;
    let checkOut = new checkout();
    checkOut.roomNum = values.roomNum;
    checkOut.name = values.name;
    checkOut.phonNum = values.phonNum;
    checkOut.date = values.date;

    alert(typeof(checkOut.roomNum))
  }

}
