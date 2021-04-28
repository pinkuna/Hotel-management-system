import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/models/Reports.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(reportForm: NgForm) {
    if (reportForm.invalid) {
      //return console.log(`Error`);
      ; 
    }

    const values = reportForm.value;
    let reports = new Report();
    reports.roomNum = values.roomNum;
    reports.name = values.name;
    reports.phonNum = values.phonNum;
    reports.theProblems = values.theProblems;
    alert(JSON.stringify(reports))
  }

}
