import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import * as AOS from 'aos';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
 styleUrls: ['./index.component.scss',]

})
export class IndexComponent implements OnInit,AfterViewInit {
  navbarOpen=false; 
  Openshop=false;Quantity:any;
  public forms:FormGroup;

  price;
 total:number =10;
  
  
  ngAfterViewInit(): void {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
             nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
       
      slidesPerView: 1,
      spaceBetween: 0,

      freeMode: true,
      touchRatio: 0, 
slideToClickedSlide: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        // when window width is <= 499px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
      
            freeMode: true,
            touchRatio: 0, 
            slideToClickedSlide: true,
        
        },
        // when window width is <= 999px
        425: {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
            touchRatio: 0, 
            slideToClickedSlide: true,
            
            
        }
    }
    });

    
    
  
    
  }

  constructor(private fb:FormBuilder ) {
    this.forms = this.fb.group({
      qty: [""],
    
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
    this.Quantity = 0;

  }
  toggleNavbar(){
    
    this.navbarOpen=!this.navbarOpen;
  }

  shop(){
    this.Openshop=!this.Openshop;
  }


plus(){
  this.Quantity++;
  var sum=this.Quantity*this.total
  console.log(sum);
}
minus(){
  this.Quantity--;
  if (this.Quantity < 0) {
 alert('empty');
    this.Quantity = 0;
    // this.total = 0;
  }
}

  
}
