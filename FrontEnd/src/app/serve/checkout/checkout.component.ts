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

  valueName: string = 'Jetniphan'
  valueRoomnum: string = '204'
  valuePhone: string = '123456789'

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
    checkOut.phoneNum = values.phoneNum;
    checkOut.date = values.date;

    this.networkUserservice.postCheckout(checkOut).subscribe(
      data => {
        if (data.status == 'success') {
          alert(`Summit Complete`)
          // window.location.href = '/'
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
