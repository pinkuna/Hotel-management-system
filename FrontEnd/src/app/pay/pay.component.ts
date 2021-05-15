import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pay } from '../models/pay.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  valueName: string = 'Jetniphan'
  valueRoomnum: string = '204'
  valuePhone: string = '123456789'

  imagePreview: any;
  file: File;

  constructor(private networkUserService: NetworkUserService) { }

  ngOnInit(): void {
  }

  onPreview(event: any) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      this.file = metaImage;
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }

  onSubmit(payForm: NgForm) {
    if (payForm.invalid) {
      //return console.log(`Error`);
      ;
    }

    const values = payForm.value;
    let pay = new Pay();
    pay.roomNum = values.roomNum;
    pay.name = values.name;
    pay.phoneNum = values.phoneNum;
    pay.time = values.time;
    pay.amount = values.amount;
    pay.bank = values.bank;
    pay.image = this.file;
    alert(JSON.stringify(pay))


    this.networkUserService.postpay(pay).subscribe(
      data => {
        if (data.status == 'success') {
          alert(data.data)
        }
        else {
          alert(data.data)
        }
      },
      error => {
        alert(error.error.message);
      },
      () => {

      }
    )
  }
}
