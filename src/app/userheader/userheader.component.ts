import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {
  navbarOpen=false; 
  Openshop=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    
    this.navbarOpen=!this.navbarOpen;
  }

  shop(){
    this.Openshop=!this.Openshop;
  }

}
