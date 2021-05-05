import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { booking} from '../models/booking.model';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  displayedColumns: string[] = ['name','idcard','phonnum','email', 'roomNum','date','action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: booking[] = [
  {name: 'Hydrogen', idcard: '1', phonnum: 'H',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Helium', idcard: '1', phonnum: 'He',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Lithium', idcard: '6', phonnum: 'Li',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Beryllium', idcard: '9', phonnum: 'Be',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Boron', idcard: '10', phonnum: 'B',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Carbon', idcard: '12', phonnum: 'C',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Nitrogen', idcard: '14', phonnum: 'N',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Oxygen', idcard: '15', phonnum: 'O',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Fluorine', idcard: '18', phonnum: 'F',email:'Jeniphan',roomNum:204,date:'25/08/61'},
  {name: 'Neon', idcard: '20', phonnum: 'Ne',email:'Jeniphan',roomNum:204,date:'25/08/61'},
];





