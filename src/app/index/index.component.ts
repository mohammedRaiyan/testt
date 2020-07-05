import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import * as AOS from 'aos';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
 styleUrls: ['./index.component.scss',]

})
export class IndexComponent implements OnInit,AfterViewInit {
  navbarOpen=false; 
  Openshop=false;
  
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
        // when window width is <= 499px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            freeMode: true,
        },
        // when window width is <= 999px
        425: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
    });
    
  
    
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });

  }
  toggleNavbar(){
    
    this.navbarOpen=!this.navbarOpen;
  }

  shop(){
    this.Openshop=!this.Openshop;
  }
  
}
