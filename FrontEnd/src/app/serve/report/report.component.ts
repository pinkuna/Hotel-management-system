import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/models/Reports.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(reportForm: NgForm){
    if(reportForm.invalid){
      return;
    }

    const values = reportForm.value;
    let reports = new Report();
    reports.roomNum = values.roomNum;
    reports.name = values.name;
    reports.phonNum = values.phonNum;
    reports.requests = values.requests;
    reports.theProblems = values.theProblems;

  }

}
