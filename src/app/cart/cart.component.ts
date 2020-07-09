import { Component, OnInit } from '@angular/core';
import { ComformAddressComponent } from '../comform-address/comform-address.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  Confirm(){
    const dialogRef = this.dialog.open(ComformAddressComponent, {
      width: '750px',

    });

    dialogRef.afterClosed().subscribe(result => {
   
    });
  }
  }


