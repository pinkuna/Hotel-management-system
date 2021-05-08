import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/models/Reports.model';
import { NetworkUserService } from 'src/app/services/network-user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  valueName: string = 'Jetniphan'
  valueRoomnum: string = '204'
  valuePhone: string = '123456789'


  constructor(private networtUserservice: NetworkUserService) { }

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

    this.networtUserservice.postReport(reports).subscribe(
      data => {
        if (data.status == 'success') {
          alert(`Submit Report`)
        } else {
          alert(data.data)
        }
      }, erorr => {

      }

    )

  }

}