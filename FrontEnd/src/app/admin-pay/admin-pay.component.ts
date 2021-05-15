import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PayRes } from '../models/Respones.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-admin-pay',
  templateUrl: './admin-pay.component.html',
  styleUrls: ['./admin-pay.component.css']
})
export class AdminPayComponent implements OnInit {

  displayedColumns = ['image', 'name', 'roomber', 'time', 'amount', 'bank',]

  dataSource = new MatTableDataSource<PayRes>();

  textSearch: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private networkUserService: NetworkUserService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    this.networkUserService.getPay().subscribe(
      data => {
        this.dataSource.data = data.map(item => {
          item.image = this.networkUserService.getPayImage(item.image)
          return item;
        })
      },
      error => {
        console.log(JSON.stringify(error.error.message))
      },
      () => {
        console.log("feed network done")
      }
    )

  }


  search(event: Event) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null!)
  }

  oncheck(id: number) {

  }

  onclickSubmitcheck() {

  }

}
