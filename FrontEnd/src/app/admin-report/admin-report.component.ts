import { Component, OnInit } from '@angular/core';
import { report } from '../models/Reports.model';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  displayedColumns: string[] = ['name','phonNum','roomNum','theProblems','Requre','title','action'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: report[] = [
  {name: 'Hydrogen', phonNum: 'H',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Helium', phonNum: 'He',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Lithium', phonNum: 'Li',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Beryllium', phonNum: 'Be',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Boron',  phonNum: 'B',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Carbon',  phonNum: 'C',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Nitrogen',  phonNum: 'N',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Oxygen',  phonNum: 'O',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Fluorine',  phonNum: 'F',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
  {name: 'Neon',  phonNum: 'Ne',roomNum: 204, theProblems:'ท่อน้ำแตก', Requre: 'ด่วน', title:'ท่อน้ำ'},
];

