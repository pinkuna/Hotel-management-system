import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input("medie_query") mobileQueryMax: any;
  @Output("toggle") navtoggle = new EventEmitter();
  

  constructor() {
    console.log(this.mobileQueryMax);
  }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navtoggle.emit();
  }


}
