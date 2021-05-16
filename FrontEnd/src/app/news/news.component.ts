import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input("stats") stats: (string | number | boolean)[]
  @Input("IFlog") Iflog: boolean;

  constructor() { }

  ngOnInit(): void {
    alert(this.Iflog)
    if (this.Iflog == false) {
      alert(`plasse login`)
      window.location.href = '/login'
    }
  }

}
