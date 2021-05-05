import { Component, OnInit } from '@angular/core';
import { checkout } from '../models/Checkout.model';

@Component({
  selector: 'app-admin-checkout',
  templateUrl: './admin-checkout.component.html',
  styleUrls: ['./admin-checkout.component.css']
})
export class AdminCheckoutComponent implements OnInit {

  displayedColumns: string[] = ['name','phonNum','roomNum','date','action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: checkout[] = [
  {name: 'Hydrogen', phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Helium', phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Lithium', phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Beryllium', phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Boron',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Carbon',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Nitrogen',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Oxygen',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Fluorine',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
  {name: 'Neon',  phonNum: 123456,roomNum: 204, date:'25/12/65'},
];


