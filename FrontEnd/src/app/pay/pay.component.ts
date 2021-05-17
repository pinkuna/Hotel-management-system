import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pay } from '../models/pay.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})


export class PayComponent implements OnInit {

  imagePreview: any;
  file: File;

  constructor(private networkUserService: NetworkUserService) { }

  @ViewChild('payForm', { static: true }) PayForm: NgForm

  ngOnInit(): void {
    const stats = JSON.parse(localStorage.getItem('_u') || '{}')
    var { roomnum, phonenum, usename, time, date, amount, bank, image } = {
      phonenum: stats.phonenum, usename: stats.usename, roomnum: '', time: '', date: '', amount: ''
      , bank: '', image: ''
    }
    setTimeout(() => {
      this.PayForm.setValue({ roomnum, phonenum, usename, time, date, amount, bank, image })
    })
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
    pay.roomNum = values.roomnum;
    pay.name = values.usename;
    pay.phoneNum = values.phonenum;
    pay.time = values.time;
    pay.amount = values.amount;
    pay.bank = values.bank;
    pay.image = this.file;
    pay.date = values.date;
    alert(JSON.stringify(pay.image))


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
