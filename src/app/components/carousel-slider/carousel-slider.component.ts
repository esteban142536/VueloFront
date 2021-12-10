import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dreamOut-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements OnInit {

  slides = [
    {'image':
      'assets/img/carrosel4.jpg'},
    {'image':
      'assets/img/carrosel1.jpg'},
    {'image':
      'assets/img/carrosel2.jpg'},
    {'image':
      'assets/img/carrosel5.jpg'},
    {'image':
      'assets/img/carrosel3.jpg'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
