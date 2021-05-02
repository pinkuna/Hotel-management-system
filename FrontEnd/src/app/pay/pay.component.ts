import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Reports.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

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
    reports.title = values.title;
    alert(JSON.stringify(reports))
  }

}
