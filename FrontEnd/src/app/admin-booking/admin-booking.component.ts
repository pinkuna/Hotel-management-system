import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { booking } from '../models/booking.model';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'idcard', 'phoneNum', 'email', 'roomNum', 'date', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: booking[] = [
  { name: 'Hydrogen', idcard: '1', phoneNum: 'H', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Helium', idcard: '1', phoneNum: 'He', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Lithium', idcard: '6', phoneNum: 'Li', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Beryllium', idcard: '9', phoneNum: 'Be', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Boron', idcard: '10', phoneNum: 'B', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Carbon', idcard: '12', phoneNum: 'C', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Nitrogen', idcard: '14', phoneNum: 'N', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Oxygen', idcard: '15', phoneNum: 'O', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Fluorine', idcard: '18', phoneNum: 'F', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
  { name: 'Neon', idcard: '20', phoneNum: 'Ne', email: 'Jeniphan', roomNum: 204, date: '25/08/61' },
];





