import { Component, OnInit,AfterViewInit } from '@angular/core';
 
import Swiper from 'swiper';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit ,AfterViewInit{
  Quantity:any;
  public forms:FormGroup;

  price;
  total;
  name: string = '';
  
  constructor(private fb:FormBuilder ) {
    this.forms = this.fb.group({
      qty: [""],
    
    });
   }
  ngAfterViewInit(): void {
    
   
    var swiper = new Swiper('.swiper-container', {
      navigation: {
             nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
        },
       
      slidesPerView: 3,
      spaceBetween: 30,

      
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
   

      breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop:true
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 30,
            loop:true
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop:true
        }
    }
    });
    
  }


  ngOnInit(): void {
    this.Quantity = 0;
    
  
}

plus(){
  this.Quantity++;
}
minus(){
  this.Quantity--;
  if (this.Quantity < 0) {
 alert('empty');
    this.Quantity = 0;
    // this.total = 0;
  }
}

setValue() {
  this.name = 'Nancy';
}




}
