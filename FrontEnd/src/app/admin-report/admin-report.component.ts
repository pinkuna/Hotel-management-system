import { Component, OnInit } from '@angular/core';
import { report } from '../models/Reports.model';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phoneNum', 'roomNum', 'theProblems', 'Requre', 'title', 'action'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: report[] = [
  { name: 'Hydrogen', phoneNum: 'H', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Helium', phoneNum: 'He', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Lithium', phoneNum: 'Li', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Beryllium', phoneNum: 'Be', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Boron', phoneNum: 'B', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Carbon', phoneNum: 'C', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Nitrogen', phoneNum: 'N', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Oxygen', phoneNum: 'O', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Fluorine', phoneNum: 'F', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
  { name: 'Neon', phoneNum: 'Ne', roomNum: 204, theProblems: 'ท่อน้ำแตก', Requre: 'ด่วน', title: 'ท่อน้ำ' },
];

