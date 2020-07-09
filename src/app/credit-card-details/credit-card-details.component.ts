import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
interface Animal {
  name: string;

}
@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  Month: Animal[] = [
    {name: 'January '},
    {name: 'February '},
    {name: 'March '},
    {name: 'April '},
    {name:'May'},
    {name:'June'},
    {name:'July'},
    {name:'August'},
    {name:'September'},
    {name:'October'},
    {name:'November'},
    {name:'December'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
