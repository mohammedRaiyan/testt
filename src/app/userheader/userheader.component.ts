import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss']
})
export class UserheaderComponent implements OnInit {
  navbarOpen=false; 
  Openshop=false;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    
    this.navbarOpen=!this.navbarOpen;
  }

  shop(){
    this.Openshop=!this.Openshop;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent , {
      width: '750px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  signup(){
    const dialogRef = this.dialog.open(RegisterComponent , {
      width: '750px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


}
