import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { checkout } from 'src/app/models/Checkout.model';
import { NetworkUserService } from 'src/app/services/network-user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private networkUserservice: NetworkUserService) { }

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

    this.networkUserservice.postCheckout(checkOut).subscribe(
      data => {
        if (data.status == 'success') {
          alert(`Summit Complete`)
          window.location.href = '/'
        } else {
          alert(data.data)
        }
      },
      error => {
        alert(status)
      }
    )

  }

}
