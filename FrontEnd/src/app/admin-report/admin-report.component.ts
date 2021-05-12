import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReportRes } from '../models/Respones.model';
import { NetworkUserService } from '../services/network-user.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  displayedColumns: string[] = ['id', 'name', 'phonenum', 'roomnum', 'theproblems', 'requre', 'title', 'admin_check'];
  dataSource = new MatTableDataSource<ReportRes>();
  textSearch: any


  constructor(private networkUserService: NetworkUserService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedata()
  }

  feedata() {
    this.networkUserService.getReport().subscribe(
      data => {
        this.dataSource.data = data
      }, error => {

      }
    )
  }

  search(event: Event) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    console.log(typeof fliterValue);
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null!);
  }

  onClickaction(id: number) {
    this.networkUserService.putreport(id).subscribe(
      data => {
        if (data.status == 'success') {
          window.location.href = '/admin-report'
        }
      }, error => {

      }
    )
  }

}


