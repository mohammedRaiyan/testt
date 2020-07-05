import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'
declare var animated:any

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    animated();
  }

  refresh(){
    animated();
  }

  ngAfterViewInit(): void {
    var mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 10,
      direction: "horizontal",
      slidesPerView: 3,
      freeMode: true,

    });
  }

}
