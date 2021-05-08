import { Component, OnInit } from '@angular/core';
import { checkout } from '../models/Checkout.model';

@Component({
  selector: 'app-admin-checkout',
  templateUrl: './admin-checkout.component.html',
  styleUrls: ['./admin-checkout.component.css']
})
export class AdminCheckoutComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phoneNum', 'roomNum', 'date', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: checkout[] = [
  { name: 'Hydrogen', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Helium', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Lithium', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Beryllium', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Boron', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Carbon', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Nitrogen', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Oxygen', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Fluorine', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
  { name: 'Neon', phoneNum: 123456, roomNum: 204, date: '25/12/65' },
];


